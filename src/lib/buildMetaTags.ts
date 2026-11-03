type MetaTagInput = {
  title: string;
  description: string;
  imageUrl: string;
  siteName: string;
  twitterHandle: string;
};

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function buildMetaTags({ title, description, imageUrl, siteName, twitterHandle }: MetaTagInput): string {
  const safeTitle = escapeAttribute(title);
  const safeDescription = escapeAttribute(description);
  const safeImageUrl = escapeAttribute(imageUrl || "https://example.com/your-hosted-social-card.png");
  const safeSiteName = escapeAttribute(siteName);
  const handle = twitterHandle.trim().replace(/^@+/, "");
  const safeHandle = escapeAttribute(handle);

  return [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDescription}" />`,
    `<meta property="og:site_name" content="${safeSiteName}" />`,
    `<meta property="og:image" content="${safeImageUrl}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDescription}" />`,
    `<meta name="twitter:image" content="${safeImageUrl}" />`,
    ...(safeHandle ? [`<meta name="twitter:creator" content="@${safeHandle}" />`] : []),
  ].join("\n");
}
