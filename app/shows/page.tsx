import Epkeventlist from "@/components/ui/Epkeventlist";
import Epkcalendar from "@/components/ui/Epkcalendar";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";

export default function ShowsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main>
        <Epkcalendar />
        <Epkeventlist />
      </main>
      <FooterSection />
    </div>
  );
}
