// app/components/ui/VenuesSection.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { venues } from "@/lib/epk-data";

const VenuesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Venues
            </p>
            <h2 className="text-4xl font-bold">Where I've Rocked The Stage</h2>
          </div>
          <p className="max-w-xl text-sm text-muted">
            Club rooms, bar stages, and festival grounds that shaped the live
            set.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <Card
              key={venue}
              className="transition hover:border-white/40"
            >
              <CardContent className="flex items-center gap-3 p-5">
                <MapPin className="h-5 w-5 text-accent" />
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
