import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaSpotify, FaApple } from "react-icons/fa";
import type { IconType } from "react-icons";
import { hero, socialLinks } from "@/lib/epk-data";

const socialIcons: Record<string, IconType> = {
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  Spotify: FaSpotify,
  "Apple Music": FaApple,
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden grain">
      <Image
        src={hero.image}
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-muted">
              Live EPK
            </p>
            <h1 className="text-5xl font-bold leading-none md:text-7xl">
              {hero.artistName}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {hero.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#ff6c00] text-black hover:bg-[#ff6c00]/90"
              >
                <a href={hero.ticketUrl} target="_blank" rel="noreferrer">
                  Tickets
                </a>
              </Button>
              <div className="flex flex-wrap items-center gap-3 text-white">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.label];
                  if (!Icon) {
                    return null;
                  }
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="rounded-full border border-white/30 p-2 transition hover:border-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-16 max-w-2xl rounded-2xl border border-muted bg-black/60 p-4 shadow-glow">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Featured Release
            </p>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="175"
              style={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "12px",
                marginTop: "12px",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/welcome-to-the-party/1763052506?i=1763052507"
              title="Featured track"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
