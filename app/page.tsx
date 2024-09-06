"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  Pause,
  Volume2,
  MapPin,
  Mail,
  Phone,
  ShoppingBag,
} from "lucide-react";

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
            <br></br>
            <br></br> <br></br> <br></br>
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
      <h2 className="text-4xl font-bold mt-10 ml-12">Upcoming Events</h2>{" "}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          className="absolute w-7/8 h-auto object-cover opacity-90"
          src="/309Fest.jpg"
          alt="Hero Image"
        />
      </section>
      {/* Top Songs Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Top Performing Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              src="https://embed.music.apple.com/us/album/playa-no-more/1735955984?i=1735955986"
            ></iframe>
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
              src="https://embed.music.apple.com/us/album/name-callin/1687572195?i=1687572437"
            ></iframe>
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
              src="https://embed.music.apple.com/us/album/playa-no-more/1735955984?i=1735955986"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              className="w-[450px] h-[450px] object-cover opacity-100"
              src="/bio-1.png"
              alt="Hero Image"
            />
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-white">
                About Pharaoh The Kid
              </h2>
              <p className="text-lg mb-4 text-white">
                From Oquawka/Galesburg, IL, Pharaoh The Kid began his musical
                journey at just 5 years old. Drawing inspiration from legends
                like Eminem, 50 Cent, and Ludacris, he quickly developed his
                unique style characterized by raw lyricism and versatile flow
                changes.
              </p>
              <p className="text-lg mb-4 text-white">
                His debut album, "Take a Trip Inside My Mind," spread rapidly
                through social media, earning him a loyal following. Pharaoh's
                music resonates with fans for its authenticity, emotional depth,
                and perfect blend of poetic and gritty elements.
              </p>
              <p className="text-lg text-white">
                As he continues to rise, Pharaoh remains committed to his craft,
                constantly exploring new styles and setting himself apart with
                creativity and dedication. He's proving that great talent can
                emerge from even the most unexpected places.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Venues Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src="/album-1.png"
            alt="Hero Image"
          />
          <h2 className="text-4xl font-bold mb-8 text-center text-white relative z-10">
            Where I've Rocked The Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              "Cheers On Main - Aledo, IL",
              "The Patio Bar & Grill - Galesburg, IL",
              "Luckys BarBQ - Oquawka, IL",
              "Opies Bar & Grill - Galesburg, IL",
              "Smokin Willies BBQ - Galesburg, IL",
            ].map((venue) => (
              <Card
                key={venue}
                className="bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <CardContent className="p-4 flex items-center">
                  <MapPin className="mr-3 flex-shrink-0 text-white" />
                  <p className="text-white">{venue}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact & Merch Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Get In Touch
              </h2>
              <div className="space-y-4">
                <p className="flex items-center text-white">
                  <Phone className="mr-3" /> (319) 759-1641
                </p>
                <p className="flex items-center text-white">
                  <Mail className="mr-3" /> pharaohthekid99@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Merch</h2>
              <div className="space-y-4">
                <p className="flex items-center justify-between text-white">
                  <span>T-Shirts</span>
                  <Badge variant="secondary" className="bg-gray-600">
                    $20.00
                  </Badge>
                </p>
                <p className="flex items-center justify-between text-white">
                  <span>Coozies</span>
                  <Badge variant="secondary" className="bg-gray-600">
                    $3.00
                  </Badge>
                </p>
                <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200">
                  {" "}
                  <ShoppingBag className="mr-2" />
                  Shop Merch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black py-8 text-center">
        <p className="text-white">
          &copy; 2024 Pharaoh The Kid. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
