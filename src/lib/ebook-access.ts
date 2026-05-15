// Lightweight client-side code unlock for ebook downloads.
// Codes are stored hashed (SHA-256, hex). Limit: bundle is still public — for
// MVP only. Upgrade to signed URLs (Lovable Cloud) for true protection.

export async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input.trim().toUpperCase());
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyCode(input: string, hashedList: readonly string[]) {
  if (!input || input.trim().length < 3) return false;
  const hash = await sha256Hex(input);
  return hashedList.includes(hash);
}

const STORAGE_PREFIX = "baraka.unlocked.";

export function isUnlocked(slug: string) {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + slug) === "1";
  } catch {
    return false;
  }
}

export function markUnlocked(slug: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_PREFIX + slug, "1");
  } catch {
    /* ignore */
  }
}
