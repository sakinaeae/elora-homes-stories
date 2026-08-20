import { createServerFn } from "@tanstack/react-start";

export type InstagramPost = {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
};

export const instagramProfile = "https://instagram.com/elorahomesinn";

type MetaMediaItem = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

// In-memory 1-hour server-side cache
let cachedPosts: InstagramPost[] = [];
let lastCacheTime = 0;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour (3,600,000 ms)

export const getInstagramPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<InstagramPost[]> => {
    const now = Date.now();

    // 1. Return fresh cached posts if available
    if (cachedPosts.length > 0 && now - lastCacheTime < CACHE_TTL_MS) {
      return cachedPosts;
    }

    // 2. Read strictly server-side environment variable (Never exposed to client JS)
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (!accessToken) {
      return [];
    }

    try {
      // Official Meta Instagram Graph API endpoint (v20.0)
      const graphUrl = `https://graph.instagram.com/v20.0/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=6&access_token=${encodeURIComponent(accessToken)}`;
      const res = await fetch(graphUrl);

      if (!res.ok) {
        if (cachedPosts.length > 0) return cachedPosts;
        return [];
      }

      const json = (await res.json()) as { data?: MetaMediaItem[] };
      if (json.data && Array.isArray(json.data)) {
        const posts: InstagramPost[] = json.data
          .map((item) => ({
            id: item.id,
            mediaUrl:
              item.media_type === "VIDEO" && item.thumbnail_url
                ? item.thumbnail_url
                : item.media_url || "",
            permalink: item.permalink,
            caption: item.caption,
            mediaType: item.media_type,
            timestamp: item.timestamp,
          }))
          .filter((post) => post.mediaUrl !== "");

        if (posts.length > 0) {
          cachedPosts = posts;
          lastCacheTime = now;
        }

        return posts;
      }
    } catch (error) {
      console.error("Error fetching Meta Instagram Graph API:", error);
      if (cachedPosts.length > 0) return cachedPosts;
    }

    return [];
  },
);
