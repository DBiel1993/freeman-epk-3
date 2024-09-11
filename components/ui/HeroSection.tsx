import React from "react";
import { Button } from "@/components/ui/button"; // Update this import path as needed

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          className="absolute w-full h-full object-cover opacity-90"
          src="/hero-2.png"
          alt="Hero Image"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-white">
            PHARAOH THE KID
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Raw Lyricism | Unique Flow | Genre Versatility
          </p>
          {/* Flex Column for Button and Music Embed */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
              onClick={() =>
                (window.location.href =
                  "https://www.eventbrite.com/e/309fest-2024-tickets-997669856397?aff=pharoahthekid")
              }
            >
              Tickets
            </Button>

            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="175"
              style={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/album/welcome-to-the-party/1763052506?i=1763052507"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
