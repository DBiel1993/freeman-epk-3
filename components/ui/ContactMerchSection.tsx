import React from "react";
import MerchSection from "@/components/ui/MerchSection";
import ContactSection from "@/components/ui/ContactSection";

const ContactMerchSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Merch Section */}
          <MerchSection />
          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </section>
  );
};

export default ContactMerchSection;
