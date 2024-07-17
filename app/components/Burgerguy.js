import Image from "next/image";
import Link from "next/link";

export default function Burerguy() {
  return (
    <div className="container flex flex-col lg:flex-row justify-evenly items-center w-full px-4 lg:px-28 py-1 mx-auto rounded-xl mt-10">
      <div className="w-full lg:w-7/12 mb-6 lg:mb-0">
        <Image
          src="/assets/nashville-hot-chicken-tender-sandwich.png.avif"
          width={600}
          height={600}
          alt="Nashville Hot Chicken Tender Sandwich"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center w-full lg:w-8/12">
        <div className="lg:ml-12 m-0 text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-2xl lg:text-3xl text-black font-bold">
            Nashville Hot Chicken Tender Sandwich
          </h3>
          <p className="text-base lg:text-lg text-black py-4 lg:py-8">
            With mayo, shredded lettuce and pickles
          </p>
          <button className="border-2 border-black text-black font-bold py-2 px-4 rounded-3xl">
            ORDER NOW
          </button>
        </div>
        <div className="w-full lg:w-5/12 hidden lg:block">
          <Image
            src="/assets/burger-guy.svg"
            width={250}
            height={250}
            alt="Burger Guy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
