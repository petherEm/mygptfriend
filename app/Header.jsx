import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-slate-600 p-8">
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo3.png"
            width={50}
            height={10}
            className="rounded-full"
            alt="logo"
          />
          <h1 className="hidden md:inline-block text-[14px] md:text-2xl font-bold">
            Ask me anything, buddy
          </h1>
        </div>
        <h1 className="text-red-500 text-[10px] mt-2">
          This is my training project on ChatGPT, <br />I am not responsible for
          the accuracy of the generated answers.
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <h1>Hi, Stranger</h1>
        {/* <button className="bg-red-400 px-4 py-2 rounded-lg">Login</button> */}
      </div>
    </header>
  );
};

export default Header;
