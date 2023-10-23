import React from "react";
import LogoVPN from "../../../public/assets/Logo.svg";
import Facebook from "../../../public/assets/Icon/facebook.svg";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center content-center items-center p-2">
      <Image src="/logo/colorido-transparente-semborda.png" alt="" width={32} height={32}/>
      <p className="ml-2 text-gray-400">©{new Date().getFullYear()} - Agência Marketing Inteligente</p>
    </div>
  );
};

export default Footer;
