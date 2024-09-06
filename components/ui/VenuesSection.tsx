// app/components/ui/VenuesSection.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const venues = [
  "Cheers On Main - Aledo, IL",
  "The Patio Bar & Grill - Galesburg, IL",
  "Luckys BarBQ - Oquawka, IL",
  "Opies Bar & Grill - Galesburg, IL",
  "Smokin Willies BBQ - Galesburg, IL",
];

const VenuesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/album-1.png"
          alt="Hero Image"
        />
        <h2 className="text-4xl font-bold mb-8 text-center text-white relative z-10">
          Where I've Rocked The Stage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {venues.map((venue) => (
            <Card
              key={venue}
              className="bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <CardContent className="p-4 flex items-center">
                <MapPin className="mr-3 flex-shrink-0 text-white" />
                <p className="text-white">{venue}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;
