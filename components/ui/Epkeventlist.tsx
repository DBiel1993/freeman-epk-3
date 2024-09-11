"use client";

import { useState } from "react";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Event = {
  id: number;
  date: string;
  venue: string;
  city: string;
  country: string;
};

const events: Event[] = [
  {
    id: 1,
    date: "2024-09-14",
    venue: "Lucky's BBQ",
    city: "Oquawka, IL",
    country: "USA",
  },
  {
    id: 2,
    date: "2024-09-08",
    venue: "Smokin Willies BBQ",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 3,
    date: "2024-08-11",
    venue: "Opies Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 4,
    date: "2024-08-04",
    venue: "Cheers On Main",
    city: "Aledo, IL",
    country: "USA",
  },
  {
    id: 5,
    date: "2024-07-28",
    venue: "The Patio Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 6,
    date: "2024-10-25",
    venue: "The Patio Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 7,
    date: "2024-10-26",
    venue: "The Patio Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 8,
    date: "2024-07-14",
    venue: "Battle of the Bands- The Patio Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 9,
    date: "2024-06-16",
    venue: "Cheers on Main Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
  {
    id: 10,
    date: "2024-05-17",
    venue: "Iowa SummerJam VII- The Patio Bar & Grill",
    city: "Galesburg, IL",
    country: "USA",
  },
];

// Sort events by date in descending order (most recent first)
const sortedEvents = events.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");

  // Get the current date
  const today = new Date();

  // Filter to show only past events
  const pastEvents = sortedEvents.filter(
    (event) => new Date(event.date).getTime() < today.getTime()
  );

  // Filter events based on search term (case-insensitive)
  const filteredEvents = pastEvents.filter(
    (event) =>
      event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-background">
      <h2 className="text-3xl font-bold mb-6 text-center">Previous Events</h2>
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search by date or venue..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      </div>
      <ul className="space-y-4">
        {filteredEvents.map((event) => (
          <li
            key={event.id}
            className="border border-border rounded-lg p-4 hover:bg-accent transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{event.venue}</h3>
                <p className="text-muted-foreground">
                  {event.city}, {event.country}
                </p>
              </div>
              <Button variant="outline" className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {filteredEvents.length === 0 && (
        <p className="text-center text-muted-foreground mt-4">
          No events found matching your search.
        </p>
      )}
    </div>
  );
}
