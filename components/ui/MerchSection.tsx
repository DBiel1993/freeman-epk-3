import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const MerchSection = () => {
  return (
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
          <h3 className="text-lg text-white font-semibold">Black T-Shirts</h3>
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
            alt="White T-Shirts"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg text-white font-semibold">White T-Shirts</h3>
          <p className="text-sm text-gray-400">Size: S, M, L, XL</p>
          <Badge variant="secondary" className="bg-gray-600">
            $20.00
          </Badge>
        </div>
      </div>

      <Link href="/pages/merch">
        <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200">
          <ShoppingBag className="mr-2" /> Shop Merch
        </Button>
      </Link>
    </div>
  );
};

export default MerchSection;
