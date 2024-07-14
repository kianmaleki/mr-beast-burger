import Image from "next/image";
import Link from "next/link";

export default function Burerguy() {
  return (
    <div className="container flex justify-evenly items-center w-full p-24 rounded-xl">
      <div className="w-6/12">
        <Image
          src="/assets/nashville-hot-chicken-tender-sandwich.png.avif"
          width={600}
          height={600}
          alt="images"
        />
      </div>
      <div className="flex justify-evenly items-center w-7/12">
        <div className="ml-12 m-0">
          <h3 className="text-3xl text-black font-bold">
            Nashville Hot Chicken Tender Sandwich
          </h3>
          <p className="text-lg text-black py-10">
            With mayo, shredded lettuce and pickles
          </p>
          <button class=" border-2 border-black text-black font-bold py-2 px-7 rounded-3xl">
            Button
          </button>
        </div>
        <div className="w-5/12">
          <Image
            src="/assets/burger-guy.svg"
            width={250}
            height={250}
            alt="images"
          />
        </div>
      </div>
    </div>
  );
}
