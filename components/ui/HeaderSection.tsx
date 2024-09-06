// app/components/ui/HeaderSection.tsx

import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the path as needed

const HeaderSection = () => {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Title */}
        <div>
          <h1 className="text-2xl text-white font-bold">Pharaoh The Kid</h1>
        </div>
        {/* Navigation */}
        <nav className="flex space-x-4">
          <Button variant="ghost" className="text-white">
            Home
          </Button>
          <Button variant="ghost" className="text-white">
            About
          </Button>
          <Button variant="ghost" className="text-white">
            Contact
          </Button>
          <Button variant="ghost" className="text-white">
            Merch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
