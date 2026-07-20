export const siteConfig = {
  name: "Looped",
  title: "Looped | Full-Stack Developer & Digital Artist",
  shortTitle: "Looped",
  description:
    "Full-stack developer and digital artist. Roblox worlds to live web apps — 50M+ game visits, 200+ clients, 8 years shipping TypeScript products end to end.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://looped.is-a.dev",
  locale: "en_US",
  email: "cored.developments@gmail.com",
  twitter: {
    handle: "@nonlooped",
    url: "https://x.com/nonlooped",
  },
  github: {
    handle: "nonlooped",
    url: "https://github.com/nonlooped",
  },
  discord: "@nonlooped",
  jobTitle: "Full-Stack Developer & Digital Artist",
  knowsAbout: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Roblox development",
    "UI engineering",
    "Full-stack web development",
  ],
} as const;

export function absoluteUrl(path = ""): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
