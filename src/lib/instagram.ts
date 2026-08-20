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

export async function loadInstagramPosts(): Promise<InstagramPost[]> {
  const accessToken =
    (typeof process !== "undefined" ? process.env?.INSTAGRAM_ACCESS_TOKEN : undefined) ||
    (import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN as string | undefined);

  const feedUrl = import.meta.env.VITE_INSTAGRAM_FEED_URL as string | undefined;

  // 1. Direct Meta Graph API query if access token is set in environment
  if (accessToken) {
    try {
      const graphUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=6&access_token=${encodeURIComponent(accessToken)}`;
      const res = await fetch(graphUrl);
      if (res.ok) {
        const json = (await res.json()) as { data?: MetaMediaItem[] };
        if (json.data && Array.isArray(json.data)) {
          return json.data
            .map((item) => ({
              id: item.id,
              mediaUrl: item.media_type === "VIDEO" && item.thumbnail_url ? item.thumbnail_url : item.media_url || "",
              permalink: item.permalink,
              caption: item.caption,
              mediaType: item.media_type,
              timestamp: item.timestamp,
            }))
            .filter((post) => post.mediaUrl !== "");
        }
      }
    } catch {
      // Fallback to custom feed proxy URL or empty list
    }
  }

  // 2. Custom API feed proxy URL if configured
  if (feedUrl) {
    try {
      const response = await fetch(feedUrl);
      if (response.ok) {
        const payload: unknown = await response.json();
        if (Array.isArray(payload)) {
          return payload.filter(isInstagramPost).sort((a, b) => b.timestamp.localeCompare(a.timestamp));
        }
      }
    } catch {
      // Fallback
    }
  }

  return [];
}

function isInstagramPost(value: unknown): value is InstagramPost {
  if (!value || typeof value !== "object") return false;
  const post = value as Record<string, unknown>;
  return (
    typeof post.id === "string" &&
    typeof post.mediaUrl === "string" &&
    typeof post.permalink === "string" &&
    typeof post.timestamp === "string" &&
    (post.mediaType === "IMAGE" || post.mediaType === "VIDEO" || post.mediaType === "CAROUSEL_ALBUM")
  );
}
