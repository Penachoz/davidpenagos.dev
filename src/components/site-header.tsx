"use client";

import { ArrowUpRightIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/content/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#cloud-builds", label: "Cloud builds" },
  { href: "#about", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/7 bg-[#0d1524]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 font-medium">
          <span className="flex size-7 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/7 font-mono text-[9px] text-cyan-100">
            DP
          </span>
          <span className="font-mono text-xs tracking-[-0.02em] text-white/75">
            davidpenagos<span className="text-cyan-300">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs text-white/42 transition-colors hover:text-white/85"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full px-4 sm:inline-flex">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              Let&apos;s connect
              <ArrowUpRightIcon />
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="md:hidden"
                aria-label="Abrir menú"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>davidpenagos.dev</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
