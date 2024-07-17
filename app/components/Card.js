import Image from "next/image";
import Link from "next/link";

export default function Card({ src, text }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 my-5 px-2 text-center">
      <div className="w-full">
        <Link href="#">
          <Image
            src={"/assets/" + src}
            width={350}
            height={350}
            className="rounded-lg w-full object-cover"
            alt={text}
          />
        </Link>
      </div>
      <div className="mt-3">
        <Link
          href="#"
          className="text-lg font-bold text-red-600 underline hover:no-underline hover:text-black"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
