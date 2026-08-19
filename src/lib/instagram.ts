export type InstagramPost = {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
};

export const instagramProfile = "https://instagram.com/elorahomesinn";

const feedUrl = import.meta.env.VITE_INSTAGRAM_FEED_URL as string | undefined;

export async function loadInstagramPosts(): Promise<InstagramPost[]> {
  if (!feedUrl) return [];

  const response = await fetch(feedUrl);
  if (!response.ok) return [];

  const payload: unknown = await response.json();
  if (!Array.isArray(payload)) return [];

  return payload.filter(isInstagramPost).sort((a, b) => b.timestamp.localeCompare(a.timestamp));
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
