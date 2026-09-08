import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100svh-128px)] items-center overflow-hidden px-5">
      <div className="hero-grid absolute inset-0" />
      <div className="relative mx-auto w-full max-w-3xl py-24 text-center">
        <p className="font-mono text-xs tracking-[0.22em] text-cyan-300/60">
          HTTP 404 · ROUTE NOT FOUND
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
          This node is outside
          <span className="block text-white/35">the current topology.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/45">
          The requested path is not part of the deployed portfolio.
        </p>
        <Button asChild size="lg" className="mt-9 rounded-full px-6">
          <Link href="/">
            <ArrowLeftIcon />
            Return to the portfolio
          </Link>
        </Button>
      </div>
    </section>
  );
}
