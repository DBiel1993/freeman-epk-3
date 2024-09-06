"use client";
import { useState } from "react";
import BioSection from "@/components/ui/BioSection";

import HeaderSection from "@/components/ui/HeaderSection";
import FooterSection from "@/components/ui/FooterSection";

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <BioSection />
      <FooterSection />
    </div>
  );
}
