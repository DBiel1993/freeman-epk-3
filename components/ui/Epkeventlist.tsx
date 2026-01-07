import React from "react";
import { CalendarIcon } from "lucide-react";
import { pastShows } from "@/lib/epk-data";
import { formatLongDate } from "@/lib/format";

export default function Component() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Archive
            </p>
            <h2 className="text-4xl font-bold">Previous Events</h2>
          </div>
          <p className="max-w-xl text-sm text-muted">
            Highlights from recent stages, club nights, and festival slots.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {pastShows.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-muted bg-card p-5 transition hover:border-white/40"
            >
              <div className="flex items-center justify-between text-sm text-muted">
                <span className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {formatLongDate(event.date)}
                </span>
                <span>{event.country}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{event.venue}</h3>
              <p className="mt-1 text-sm text-muted">{event.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
