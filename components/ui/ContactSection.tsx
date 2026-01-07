import React from "react";
import { FaInstagram, FaFacebook, FaSpotify, FaApple } from "react-icons/fa";
import type { IconType } from "react-icons";
import { contactEmail, contactPhone, socialLinks } from "@/lib/epk-data";

const socialIcons: Record<string, IconType> = {
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  Spotify: FaSpotify,
  "Apple Music": FaApple,
};

const ContactSection = () => {
  return (
    <div className="rounded-3xl border border-muted bg-card p-10 shadow-glow">
      <p className="text-xs uppercase tracking-[0.35em] text-muted">
        Booking
      </p>
      <h2 className="mt-3 text-3xl font-bold">Contact Pharaoh The Kid</h2>
      <p className="mt-4 text-muted">
        For inquiries or bookings, please reach out via the form below or follow
        on social media.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="text-muted">Email:</span>
        <a
          href={`mailto:${contactEmail}`}
          className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white"
        >
          {contactEmail}
        </a>
        <span className="text-muted">Phone:</span>
        <a
          href={`tel:${contactPhone}`}
          className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-white"
        >
          {contactPhone}
        </a>
      </div>
      <div className="mt-8 flex flex-wrap gap-3 text-white">
        {socialLinks.map((link) => {
          const Icon = socialIcons[link.label];
          if (!Icon) {
            return null;
          }
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="rounded-full border border-white/30 p-3 transition hover:border-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
