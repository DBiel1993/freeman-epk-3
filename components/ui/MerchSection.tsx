import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { merchItems } from "@/lib/epk-data";

const MerchSection = () => {
  return (
    <div>
      <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Merch
          </p>
          <h2 className="text-4xl font-bold">Official Merch Drops</h2>
        </div>
        <p className="max-w-xl text-sm text-muted">
          Streetwear staples and show-night essentials to rep the brand on and
          off stage.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {merchItems.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-muted bg-card p-4 text-center"
          >
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-muted">{item.sizes}</p>
            <Badge variant="secondary" className="mt-3 bg-white/10 text-white">
              {item.price}
            </Badge>
          </div>
        ))}
      </div>
      <Button asChild className="mt-6 w-full bg-white text-black">
        <Link href="/merch">
          <ShoppingBag className="mr-2 h-4 w-4" /> Shop Merch
        </Link>
      </Button>
    </div>
  );
};

export default MerchSection;
