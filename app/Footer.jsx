import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 max-w-6xl mx-auto">
      <div className="flex justify-center items-center space-x-4">
        <Image
          src="/logo3.png"
          width={30}
          height={10}
          className="rounded-full"
          alt="logo"
        />
        <h1 className="text-[12px]">Developed by <Link href="https://www.piotrmaciejewski.com" className="underline underline-offset-1 decoration-pink-500">Piotr Maciejewski</Link></h1>
      </div>
    </footer>
  );
};

export default Footer;
