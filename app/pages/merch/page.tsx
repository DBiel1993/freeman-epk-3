"use client";
import { useState } from "react";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";
import ContactMerchSection from "@/components/ui/ContactMerchSection";

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <ContactMerchSection />
      <FooterSection />
    </div>
  );
}
