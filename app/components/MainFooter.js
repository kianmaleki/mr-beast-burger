import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function MainFooter() {
  return (
    <>
      <footer className="bg-black text-white py-8 w-full">
        <div className="container flex flex-row justify-start w-full items-start px-10">
          <div className="flex flex-row justify-start w-6/12 flex-wrap ml-14">
            <Link href="#" className="text-white text-sm  p-3">
              About
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Order Now
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Do Not Sell My Personal Information
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Menu
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Nutrition Info
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Locations
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-white text-sm p-3">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-row justify-start w-6/12 flex-wrap ml-14">
            <ul className="flex space-x-4">
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 pt-5 flex justify-end items-center border-t-2 w-11/12 m-auto ">
          <p className="text-sm text-center">
            &copy; 2024 Virtual Dining Concepts, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
