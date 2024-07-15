import Link from "next/link";
import Image from "next/image";

export default function FooterBaners() {
  return (
    <>
      <div className="w-11/12 rounded-2xl flex justify-evenly items-center h-fit bg-gradient-to-r from-amber-300">
        <div className="w-full text-start py-16 px-20">
          <h3 className="text-2xl font-extrabold w-7/12">
            Visit the World’s First MrBeast Burger Restaurant at American Dream!
          </h3>
          <div className="mt-14">
            <Link
              href="#"
              className="p-4 bg-red-500 rounded-3xl text-white font-extrabold hover:bg-black"
            >
              LEARN ABOUT THE RESTAURANT
            </Link>
          </div>
        </div>
        <div className=" z-[-1] w-11/12 m-auto">
          <Image
            src="/assets/american-dream.png.avif"
            width={900}
            height={150}
            className="object-cover h-80 w-full rounded-r-2xl"
          />
        </div>
      </div>
      <div className="w-11/12 flex justify-center items-center h-auto mt-10 ">
        <div className="w-8/12 flex justify-start items-start bg-[#a8ebe2] rounded-l-2xl">
          <Image
            src="/assets/photo-beast-style-burger-combo.jpg.avif"
            width={600}
            height={150}
            className="object-contain  h-96"
          />
        </div>
        <div className="bg-[#fed6d7] w-5/12 h-96 py-10 px-5 flex flex-col justify-center rounded-r-2xl">
          <div className="ml-10 w-8/12">
            <h3 className="text-3xl text-red-600 font-bold mb-4">
              Attention Restaurant Owners
            </h3>
            <p className="text-lg text-black font-bold my-3">
              Add MrBeast Burger to your existing restaurant’s kitchen.
            </p>
            <p className="text-lg text-black mb-5">
              MrBeast Burger is a virtual brand offering a separate concept to
              run out of your kitchen, available for delivery and pick up only
              via food delivery services.
            </p>
            <button className="border-2 text-white bg-red-500 font-bold py-3 px-5 rounded-3xl hover:bg-black">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
