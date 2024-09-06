import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
      <div className="space-y-4">
        <p className="flex items-center text-white">
          <Phone className="mr-3" /> (319) 759-1641
        </p>
        <p className="flex items-center text-white">
          <Mail className="mr-3" /> pharaohthekid99@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
