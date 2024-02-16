import React from "react";
import Image from "next/image";
import SearchBar from "./search";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xxl mx-2 p-4 h-16 mb-12 mt-2">
      <div className="flex items-center gap-2">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ml-auto" // Added ml-4 (left margin)
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            src="/abc.gif"
            alt="Motivation"
            className="dark"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      <div className="flex items-center">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ml-auto" // Added ml-4 (left margin)
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.png"
            alt="Site Logo"
            className="dark"
            width={160}
            height={160}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 basis-auto">
        <a
          href="https://github.com/Code-XT"
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/CodeX.png"
            alt="CodeX Logo"
            className="dark:invert"
            width={100}
            height={100}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
