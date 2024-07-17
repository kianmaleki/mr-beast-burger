"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 w-full flex justify-between items-center px-6 md:px-14 py-5 sticky top-0 border-b-2 z-10">
      <div className="flex items-center">
        <Link href="#">
          <Image
            src="/assets/mrbeast-burger_classic-beast.svg"
            width={130}
            height={130}
            alt="logo"
            className="h-auto w-auto"
          />
        </Link>
      </div>
      <ul className="hidden md:flex font-medium space-x-4">
        {["Home", "About", "Services", "Pricing"].map((item, index) => (
          <li key={index}>
            <Link href="#" className="block py-0 px-1 text-black rounded">
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link href="#" className="block py-0 px-1 text-black rounded">
            <svg
              width="24"
              height="29"
              viewBox="0 0 24 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.889 6.66669H19.5031C19.0617 2.9179 15.8654 0 12 0C8.13464 0 4.93841 2.9179 4.49702 6.66669H1.11111C0.497446 6.66669 0 7.16414 0 7.77781V27.3334C0 27.9471 0.497446 28.4445 1.11111 28.4445H22.889C23.5026 28.4445 24.0001 27.9471 24.0001 27.3334V7.77781C24.0001 7.16414 23.5026 6.66669 22.889 6.66669ZM11.9997 2.22239C14.6377 2.22239 16.8341 4.14768 17.2586 6.66685H6.74088C7.16532 4.14768 9.36172 2.22239 11.9997 2.22239ZM2.22215 26.2225H21.7778V8.88908H19.5555V12.2224C19.5555 12.8361 19.0581 13.3335 18.4444 13.3335C17.8308 13.3335 17.3333 12.8361 17.3333 12.2224V8.88908H6.66661V12.2224C6.66661 12.8361 6.16916 13.3335 5.5555 13.3335C4.94183 13.3335 4.44438 12.8361 4.44438 12.2224V8.88908H2.22215V26.2225Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden w-full bg-white absolute top-full left-0`}
        id="mobile-menu"
      >
        <ul className="flex flex-col space-y-2 mt-4 justify-center items-center border-b-2">
          {["Home", "About", "Services", "Pricing"].map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="block py-2 px-4 text-black rounded hover:bg-gray-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
