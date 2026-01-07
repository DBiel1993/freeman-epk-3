import ContactSection from "@/components/ui/ContactSection";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";
import TopSongsSection from "@/components/ui/TopSongsSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main>
        <TopSongsSection />
        <div className="container mx-auto px-4 pb-20">
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
