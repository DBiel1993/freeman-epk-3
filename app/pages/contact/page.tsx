"use client";
import { useState } from "react";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";
import ContactMerchSection from "@/components/ui/ContactMerchSection";
import ContactSection from "@/components/ui/ContactSection";
import MerchSection from "@/components/ui/MerchSection";
import Spaceintro from "@/components/ui/Spaceintro";

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <Spaceintro />
      <br></br>
      <br></br>
      <ContactSection />
      <FooterSection />
    </div>
  );
}
