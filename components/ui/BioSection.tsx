import Image from "next/image";
import React from "react";
import { bio } from "@/lib/epk-data";

const BioSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-[1.1fr_1.4fr]">
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-muted shadow-glow md:h-[480px]">
          <Image
            src={bio.image}
            alt="Bio Image"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Biography
          </p>
          <h2 className="mt-3 text-4xl font-bold">{bio.title}</h2>
          <div className="mt-6 space-y-4 text-lg text-muted">
            {bio.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
