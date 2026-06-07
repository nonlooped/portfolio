import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section-wrap flex min-h-[70dvh] flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        404
      </p>
      <h1 className="text-display text-4xl font-black uppercase text-foreground md:text-5xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted-foreground text-prose">
        That route does not exist on {siteConfig.name}&apos;s portfolio.
      </p>
      <Link href="/" className="focus-ring btn-primary">
        Back home
      </Link>
    </main>
  );
}
