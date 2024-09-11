"use client";

import SpaceIntro from "@/components/ui/Spaceintro";
import Epkeventlist from "@/components/ui/Epkeventlist";
import Epkcalendar from "@/components/ui/Epkcalendar";
import HeaderSection from "@/components/ui/HeaderSection";
import FooterSection from "@/components/ui/FooterSection";
import ContactMerchSection from "@/components/ui/ContactMerchSection";
import VenuesSection from "@/components/ui/VenuesSection";
import BioSection from "@/components/ui/BioSection";
import TopSongsSection from "@/components/ui/TopSongsSection";
import HeroSection from "@/components/ui/HeroSection";
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
      <HeaderSection />
      <HeroSection />
      <Epkcalendar />
      <TopSongsSection />
      <BioSection />
      <SpaceIntro />
      <ContactMerchSection />
      <FooterSection />
    </div>
  );
}
