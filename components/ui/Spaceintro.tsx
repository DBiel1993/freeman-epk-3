"use client"; // This tells Next.js that this component should be rendered on the client-side.

// Import necessary hooks and icons.
import { useState, useEffect, useRef } from "react";
import { CalendarIcon } from "lucide-react";

// Define an interface for Event to structure the data.
interface Event {
  id: number;
  date: string;
  venue: string;
  city: string;
  country: string;
}

// Sample list of events with data for the calendar.
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

export default function SpaceIntro() {
  const [scrollPosition, setScrollPosition] = useState(2); // Start scroll at the bottom
  const contentRef = useRef<HTMLDivElement>(null); // Ref to track the content's DOM element.

  // useEffect hook to handle animation and smooth scrolling effect.
  useEffect(() => {
    let animationFrameId: number; // Holds the ID for requestAnimationFrame.
    let startTime: number | null = null; // Keeps track of the start time of the animation.
    const duration = 15000; // Duration for smooth scrolling content.

    // Function to animate the scrolling content.
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp; // Set start time when the animation begins.
      const elapsed = timestamp - startTime; // Calculate elapsed time.
      const progress = elapsed / duration; // Calculate progress as a percentage.

      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight; // Get the total height of the content.
        const containerHeight = contentRef.current.clientHeight; // Get the visible height of the container.
        const totalScrollDistance = contentHeight - containerHeight; // Calculate the total scroll distance.

        // If the progress reaches 100%, restart the loop.
        if (progress >= 2) {
          startTime = timestamp; // Restart the animation loop when the scroll reaches the top.
          setScrollPosition(1); // Reset scroll position to the bottom.
        } else {
          // Scroll upward based on progress.
          setScrollPosition(1 - progress); // Scroll from bottom to top.
        }

        animationFrameId = requestAnimationFrame(animate); // Continue the animation.
      }
    };

    // Start the animation.
    animationFrameId = requestAnimationFrame(animate);

    // Clean up the animation when the component unmounts or updates.
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-black overflow-hidden"
      style={{ height: "400px", perspective: "300px" }} // Container with fixed height and 3D perspective.
    >
      {/* Star Field */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Generates 100 random stars with varying sizes and positions, but no animation */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 1 + 5}px`, // Random star width between 1px and 3px.
              height: `${Math.random() * 25 + 2}px`, // Random star height between 1px and 3px.
              left: `${Math.random() * 100}%`, // Random horizontal position from 0% to 100% of the container's width.
              top: `${Math.random() * 100}%`, // Random vertical position from 0% to 100% of the container's height.

              // No animation applied, stars remain static.
            }}
          />
        ))}
      </div>

      {/* Scrolling Content */}
      <div
        ref={contentRef} // Reference to the scrolling content.
        className="absolute w-full text-center"
        style={{
          transform: `translateY(${scrollPosition * 100}%) rotateX(30deg)`, // Translate based on scroll position and rotate for a 3D effect.
          transformOrigin: "center bottom", // Set the transform origin for the 3D effect.
        }}
      >
        {/* Title */}
        <h1 className="text-6xl font-bold mb-4 text-yellow-300">
          Pharaoh the kid
        </h1>

        {/* Subtitle */}
        <h2 className="text-4xl font-bold mb-2 text-yellow-300">
          Previous Events
        </h2>

        {/* Event List */}
        <div className="space-y-4">
          {/* Map through the events array to render each event's details */}
          {events.map((event) => (
            <div key={event.id} className="p-2">
              <h3 className="text-xlg font-semibold text-yellow-300">
                {event.venue} {/* Venue name */}
              </h3>
              <p className="text-lg text-gray-300">
                {event.city}, {event.country} {/* City and country */}
              </p>
              <p className="text-sm text-gray-400 flex items-center justify-center">
                <CalendarIcon className="mr-1 h-4 w-4" /> {/* Calendar icon */}
                {/* Format event date */}
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
