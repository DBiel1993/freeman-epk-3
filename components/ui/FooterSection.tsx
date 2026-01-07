import React from "react";
import { socialLinks } from "@/lib/epk-data";

const FooterSection = () => {
  return (
    <footer className="border-t border-muted bg-black/80 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <p className="text-sm text-muted">
          &copy; 2024 Pharaoh The Kid. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
