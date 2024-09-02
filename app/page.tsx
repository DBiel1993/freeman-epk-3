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
        <video
          className="absolute w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          src="/placeholder.svg?height=1080&width=1920"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-white">
            PHARAOH THE KID
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Raw Lyricism | Unique Flow | Genre Versatility
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="mr-2" />
            ) : (
              <PlayCircle className="mr-2" />
            )}
            {isPlaying ? "Pause" : "Play"} Latest Track
          </Button>
        </div>
      </section>

      {/* Top Songs Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Top Performing Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Name Callin", "Playa No More", "Cognac"].map((song, index) => (
              <Card
                key={song}
                className="bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {song}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-white bg-gray-600"
                    >{`#${index + 1} Hit`}</Badge>
                  </div>
                  <Button size="icon" variant="ghost" className="text-white">
                    <Volume2 />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Pharaoh The Kid"
              className="rounded-lg shadow-2xl w-full md:w-1/3 mb-8 md:mb-0"
            />
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4 text-white">
                About Pharaoh The Kid
              </h2>
              <p className="text-lg mb-4 text-white">
                Born in Burlington, IA, and raised in Oquawka/Galesburg, IL,
                Pharaoh The Kid began his musical journey at just 5 years old.
                Drawing inspiration from legends like Eminem, 50 Cent, and
                Ludacris, he quickly developed his unique style characterized by
                raw lyricism and versatile flow changes.
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
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Where I've Rocked The Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cheers On Main - Aledo, IL",
              "The Patio Bar & Grill - Galesburg, IL",
              "Luckys BarBQ - Oquawka, IL",
              "Opies Bar & Grill - Galesburg, IL",
              "Lucky's BBQ - Oquawka, IL",
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
                  <span>CDs</span>
                  <Badge variant="secondary" className="bg-gray-600">
                    $3.00
                  </Badge>
                </p>
                <Button className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white">
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
