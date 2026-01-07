import BioSection from "@/components/ui/BioSection";
import Epkeventlist from "@/components/ui/Epkeventlist";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";
import VenuesSection from "@/components/ui/VenuesSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main>
        <BioSection />
        <VenuesSection />
        <Epkeventlist />
      </main>
      <FooterSection />
    </div>
  );
}
