import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";

// Sample data for the events
const events = [
  {
    date: "2024-10-26",
    venue: "308 Fest 2024",
    location: "The Patio Bar & Grill, IL",
    time: "5:00 PM",
    image: "/309Fest.jpg",
  },
  {
    date: "2024-10-27",
    venue: "308 Fest 2024",
    location: "The Patio Bar & Grill, IL",
    time: "2:00 PM",
    image: "/309Fest.jpg",
  },
  {
    date: "2024-09-15",
    venue: "Lucky's BBQ",
    location: "Oquawka, IL",
    time: "11:00 PM",
    image: "/event-luckys.JPG",
  },
  // Add more events as needed
];

export default function Component() {
  return (
    <div className="container mx-auto px-0 py-0">
      <h2 className="text-3xl font-bold mt-7 mb-6 text-center">
        Upcoming Shows
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="overflow-hidden">
            {/* Image Section */}
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: "cover", // Ensures the image covers the entire div
              }}
            />
            <CardContent className="p-1">
              {/* Date and Year */}
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(event.date).getFullYear()}
                </div>
              </div>
              {/* Venue and Details */}
              <h3 className="text-xl font-semibold mb-2">{event.venue}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4 mr-1" />
                {event.time}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
