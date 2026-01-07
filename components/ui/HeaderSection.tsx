import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-muted bg-black/80 backdrop-blur">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-xl font-bold uppercase tracking-wide">
          Pharaoh The Kid
        </Link>
        <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
          <Button asChild variant="ghost" className="text-white">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white">
            <Link href="/shows">Shows</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white">
            <Link href="/merch">Merch</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
