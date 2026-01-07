import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { upcomingShows } from "@/lib/epk-data";
import { formatShortDate, formatYear } from "@/lib/format";

export default function Component() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Upcoming
            </p>
            <h2 className="text-4xl font-bold">Upcoming Shows</h2>
          </div>
          <p className="max-w-xl text-sm text-muted">
            Spotlighting the next set of live dates and festival appearances.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingShows.map((event) => (
            <Card
              key={`${event.venue}-${event.date}`}
              className="overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={event.image}
                  alt={event.venue}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    {formatShortDate(event.date)}
                  </span>
                  <span>{formatYear(event.date)}</span>
                </div>
                <h3 className="text-xl font-semibold">{event.venue}</h3>
                <div className="flex items-center text-sm text-muted">
                  <MapPinIcon className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-muted">
                  <ClockIcon className="mr-2 h-4 w-4" />
                  {event.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
