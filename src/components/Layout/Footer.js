import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center content-center items-center p-2">
      <Image src="/logo/colorido-transparente-semborda.png" alt="" width={32} height={32}/>
      <p className="ml-2 text-gray-400">©{new Date().getFullYear()} - Agência Marketing Inteligente</p>
    </div>
  );
};

export default Footer;
