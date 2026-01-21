import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50 animate-pulse cursor-pointer">
      <RiWhatsappFill className="text-green-600 size-14 lg:size-16" />
    </div>
  );
};

export default WhatsApp;
