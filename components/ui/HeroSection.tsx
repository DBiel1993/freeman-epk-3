import React from "react";
import { Button } from "@/components/ui/button"; // Update this import path as needed
import { FaInstagram, FaFacebook, FaSpotify, FaApple } from "react-icons/fa";

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
          {/* Flex Column for Button, Social Icons, and Music Embed */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-gray-200"
              onClick={() =>
                (window.location.href =
                  "https://www.eventbrite.com/e/309fest-2024-tickets-997669856397?aff=pharoahthekid")
              }
            >
              Tickets
            </Button>

            {/* Social Media Icons */}
            <div className="flex space-x-4 text-white mt-4">
              <a
                href="https://www.instagram.com/pharaohthekid99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 hover:text-gray-400" />
              </a>
              <a
                href="https://www.facebook.com/p/Pharaoh-The-Kid-100027352491875/?paipv=0&eav=AfaK_c1Qv8b1ZvMARUFd9AAhlhTa_MEuGJxbQjX23CV6L40LOHEwuJwsx5XV2zrTGnU&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6 hover:text-gray-400" />
              </a>
              <a
                href="https://open.spotify.com/artist/37M8wx1NvoiQujq2cN0hhT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify className="w-6 h-6 hover:text-gray-400" />
              </a>
              <a
                href="https://music.apple.com/us/artist/pharaoh-the-kid/1524193407"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple className="w-6 h-6 hover:text-gray-400" />
              </a>
            </div>

            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="175"
              style={{
                width: "80%",
                maxWidth: "660px",
                overflow: "hidden",
                borderRadius: "10px",
                marginTop: "200px",
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
