"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the path as needed

const HeaderSection = () => {
  return (
    <header className="bg-black py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Title */}
        <Link href="/">
          <h1 className="text-2xl text-white font-bold cursor-pointer">
            Pharaoh The Kid
          </h1>
        </Link>
        {/* Navigation */}
        <nav className="flex space-x-4">
          <Link href="/">
            <Button variant="ghost" className="text-white">
              Home
            </Button>
          </Link>
          <Link href="/pages/about">
            <Button variant="ghost" className="text-white">
              About
            </Button>
          </Link>
          <Link href="/pages/contact">
            <Button variant="ghost" className="text-white">
              Contact
            </Button>
          </Link>
          <Link href="/pages/merch">
            <Button variant="ghost" className="text-white">
              Merch
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
