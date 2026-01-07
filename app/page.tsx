import BioSection from "@/components/ui/BioSection";
import Epkeventlist from "@/components/ui/Epkeventlist";
import Epkcalendar from "@/components/ui/Epkcalendar";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";
import HeroSection from "@/components/ui/HeroSection";
import MerchSection from "@/components/ui/MerchSection";
import TopSongsSection from "@/components/ui/TopSongsSection";
import VenuesSection from "@/components/ui/VenuesSection";
import ContactSection from "@/components/ui/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main>
        <HeroSection />
        <TopSongsSection />
        <Epkcalendar />
        <BioSection />
        <VenuesSection />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <MerchSection />
          </div>
        </section>
        <Epkeventlist />
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <ContactSection />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
