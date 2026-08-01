import { pages } from "@/config/pages";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export function GET() {
  const link = "https://themaginui.dev/blog";
  const posts = pages.blog.items
    .map(
      ({ title, copy }) =>
        `<item><title>${escapeXml(title)}</title><description>${escapeXml(copy)}</description><link>${link}</link></item>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>themaginui Notes</title><link>${link}</link><description>Design systems, motion, and React components.</description>${posts}</channel></rss>`;

  return new Response(xml, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "application/rss+xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
