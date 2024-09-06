// app/components/ui/BioSection.tsx

import React from "react";

const BioSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            className="w-[450px] h-[450px] object-cover opacity-100"
            src="/bio-1.png"
            alt="Bio Image"
          />
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-4 text-white">
              About Pharaoh The Kid
            </h2>
            <p className="text-lg mb-4 text-white">
              From Oquawka/Galesburg, IL, Pharaoh The Kid began his musical
              journey at just 5 years old. Drawing inspiration from legends like
              Eminem, 50 Cent, and Ludacris, he quickly developed his unique
              style characterized by raw lyricism and versatile flow changes.
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
  );
};

export default BioSection;
