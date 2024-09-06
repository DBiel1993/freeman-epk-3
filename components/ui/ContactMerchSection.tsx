// app/components/ui/ContactMerchSection.tsx

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ShoppingBag } from "lucide-react";

const ContactMerchSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center text-white">
                <Phone className="mr-3" /> (319) 759-1641
              </p>
              <p className="flex items-center text-white">
                <Mail className="mr-3" /> pharaohthekid99@gmail.com
              </p>
            </div>
          </div>

          {/* Merch Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">Merch</h2>
            <div className="space-y-4">
              <p className="flex items-center justify-between text-white">
                <span>T-Shirts</span>
                <Badge variant="secondary" className="bg-gray-600">
                  $20.00
                </Badge>
              </p>
              <p className="flex items-center justify-between text-white">
                <span>Coozies</span>
                <Badge variant="secondary" className="bg-gray-600">
                  $3.00
                </Badge>
              </p>
              <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200">
                <ShoppingBag className="mr-2" /> Shop Merch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMerchSection;
