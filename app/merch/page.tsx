import ContactSection from "@/components/ui/ContactSection";
import FooterSection from "@/components/ui/FooterSection";
import HeaderSection from "@/components/ui/HeaderSection";
import MerchSection from "@/components/ui/MerchSection";

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main>
        <div className="container mx-auto px-4 py-20">
          <MerchSection />
        </div>
        <div className="container mx-auto px-4 pb-20">
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
