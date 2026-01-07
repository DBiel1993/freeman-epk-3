import React from "react";
import { topTracks } from "@/lib/epk-data";

const TopSongsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Streaming
            </p>
            <h2 className="text-4xl font-bold">Top Performing Tracks</h2>
          </div>
          <p className="max-w-xl text-sm text-muted">
            Tap into the most played releases and showcase-ready cuts for
            programming, press, and playlist editors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-muted bg-card p-4 shadow-glow"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted">
                {track.title}
              </p>
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="175"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={track.embedUrl}
                title={track.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSongsSection;
