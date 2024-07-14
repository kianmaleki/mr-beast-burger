import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 w-full flex justify-between items-center px-9 py-4 fixed top-0 border-b-2">
      <div className="flex items-center">
        <Link href="#">
          <Image
            src="/assets/mrbeast-burger_classic-beast.svg"
            width={130}
            height={130}
            alt="logo"
          />
        </Link>
      </div>
      <ul className="font-medium flex space-x-4">
        <li>
          <Link href="#" className="block py-0 px-1 text-black  rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="block py-0 px-1 text-black  rounded">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="block py-0 px-1 text-black  rounded">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="block py-0 px-1 text-black  rounded">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#" className="block py-0 px-1 text-black  rounded">
            <svg
              data-v-a5ffd402=""
              width="24"
              height="29"
              viewBox="0 0 24 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-a5ffd402=""
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.889 6.66669H19.5031C19.0617 2.9179 15.8654 0 12 0C8.13464 0 4.93841 2.9179 4.49702 6.66669H1.11111C0.497446 6.66669 0 7.16414 0 7.77781V27.3334C0 27.9471 0.497446 28.4445 1.11111 28.4445H22.889C23.5026 28.4445 24.0001 27.9471 24.0001 27.3334V7.77781C24.0001 7.16414 23.5026 6.66669 22.889 6.66669ZM11.9997 2.22239C14.6377 2.22239 16.8341 4.14768 17.2586 6.66685H6.74088C7.16532 4.14768 9.36172 2.22239 11.9997 2.22239ZM2.22215 26.2225H21.7778V8.88908H19.5555V12.2224C19.5555 12.8361 19.0581 13.3335 18.4444 13.3335C17.8308 13.3335 17.3333 12.8361 17.3333 12.2224V8.88908H6.66661V12.2224C6.66661 12.8361 6.16916 13.3335 5.5555 13.3335C4.94183 13.3335 4.44438 12.8361 4.44438 12.2224V8.88908H2.22215V26.2225Z"
                fill="black"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
