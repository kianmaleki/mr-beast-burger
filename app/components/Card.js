import Image from "next/image";
import Link from "next/link";

export default function Card({ src, text }) {
  return (
    <div className="w-1/5 my-10  text-center">
      <div>
        <Link href="#">
          <Image
            src={"/assets/" + src}
            width={350}
            height={350}
            className=" rounded-lg w-full"
          />
        </Link>
      </div>
      <div>
        <Link
          href="#"
          className="text-lg font-bold mt-5 text-red-600 underline hover:no-underline hover:text-black"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
