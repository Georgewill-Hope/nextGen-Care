import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50 animate-pulse cursor-pointer w-fit">
      <a
        href="https://www.facebook.com/share/1Bu31bWk4E/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappFill className="text-green-600 size-14 lg:size-16" />
      </a>
    </div>
  );
};

export default WhatsApp;
