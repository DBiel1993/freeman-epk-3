import React from "react";
import { FaInstagram, FaFacebook, FaSpotify, FaApple } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Pharaoh The Kid</h2>
      <p className="mb-4">
        For inquiries or bookings, please reach out via the form below or follow
        on social media.
      </p>
      {/* Add contact form or contact details here */}

      {/* Social Media Icons */}
      <div className="flex space-x-4 text-white mt-8">
        <a
          href="https://www.instagram.com/pharaohthekid99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6 hover:text-gray-400" />
        </a>
        <a
          href="https://www.facebook.com/p/Pharaoh-The-Kid-100027352491875/?paipv=0&eav=AfaK_c1Qv8b1ZvMARUFd9AAhlhTa_MEuGJxbQjX23CV6L40LOHEwuJwsx5XV2zrTGnU&_rdr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 hover:text-gray-400" />
        </a>
        <a
          href="https://open.spotify.com/artist/37M8wx1NvoiQujq2cN0hhT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="w-6 h-6 hover:text-gray-400" />
        </a>
        <a
          href="https://music.apple.com/us/artist/pharaoh-the-kid/1524193407"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple className="w-6 h-6 hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
