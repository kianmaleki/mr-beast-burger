import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function MainFooter() {
  return (
    <footer className="bg-black text-white py-5 w-full p-5">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-5 md:px-10 space-y-5 md:space-y-0">
        <div className="flex flex-wrap w-full md:w-6/12 space-y-3 md:space-y-0">
          {[
            "About",
            "Order Now",
            "Do Not Sell My Personal Information",
            "Menu",
            "Privacy Policy",
            "Nutrition Info",
            "Locations",
            "Terms & Conditions",
            "Contact Us",
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              className="text-white text-sm p-2 w-full md:w-auto"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full md:w-5/12 space-y-5 md:space-y-0 p-5 md:space-x-6">
          <ul className="flex space-x-3">
            {[faFacebookF, faInstagram, faXTwitter, faYoutube].map(
              (icon, index) => (
                <li key={index}>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-white text-2xl"
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
          <Image
            src="/assets/mrbeast-logo-portrait.svg"
            width={80}
            height={80}
            alt="MrBeast Logo"
          />
        </div>
      </div>
      <div className="mt-5 pt-5 flex justify-end items-center border-t-2 border-white-700 w-11/12 mx-auto">
        <p className="text-sm text-right">
          &copy; 2024 Virtual Dining Concepts, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
