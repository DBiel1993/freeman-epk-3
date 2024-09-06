import Link from "next/link";
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Merchandise Item 1 */}
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <img
                  src="/blk-shirt.jpg"
                  alt="T-Shirts"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg text-white font-semibold">
                  Black T-Shirts
                </h3>
                <p className="text-sm text-gray-400">Size: S, M, L, XL</p>
                <Badge variant="secondary" className="bg-gray-600">
                  $20.00
                </Badge>
              </div>

              {/* Merchandise Item 2 */}
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <img
                  src="/Coozie-1.png"
                  alt="Coozies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg text-white font-semibold">Coozies</h3>
                <p className="text-sm text-gray-400">Size: One Size</p>
                <Badge variant="secondary" className="bg-gray-600">
                  $3.00
                </Badge>
              </div>

              {/* Merchandise Item 3 */}
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <img
                  src="/wht-shirt.jpg"
                  alt="Hats"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg text-white font-semibold">
                  White T-Shirt
                </h3>
                <p className="text-sm text-gray-400">Size: S, M, L, XL</p>
                <Badge variant="secondary" className="bg-gray-600">
                  $20.00
                </Badge>
              </div>
            </div>

            <Link href="/merch">
              <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200">
                <ShoppingBag className="mr-2" /> Shop Merch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMerchSection;
