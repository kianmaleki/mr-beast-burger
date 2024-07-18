import Link from "next/link";
import Image from "next/image";

export default function FooterBaners() {
  return (
    <>
      <div className="w-11/12 mx-auto rounded-2xl flex flex-col lg:flex-row justify-evenly items-center h-fit  lg:bg-gradient-to-r lg:from-amber-200 bg-amber-200 p-5 lg:p-0">
        <div className="w-full text-start py-16 px-5 lg:px-20">
          <h3 className="text-2xl font-extrabold lg:w-7/12">
            Visit the World’s First MrBeast Burger Restaurant at American Dream!
          </h3>
          <div className="mt-10 lg:mt-14">
            <Link
              href="#"
              className="p-4 bg-red-500 rounded-3xl text-white font-extrabold hover:bg-black"
            >
              LEARN ABOUT THE RESTAURANT
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-11/12 m-auto lg:m-0 mt-5 lg:mt-0">
          <Image
            src="/assets/american-dream.png.avif"
            width={900}
            height={150}
            className="object-cover h-60 lg:h-80 w-full lg:rounded-r-2xl z-[-1]"
            alt="American Dream"
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-center items-center h-auto mt-10 lg:space-y-0">
        <div className="w-full lg:w-8/12 flex justify-start items-start bg-[#a8ebe2] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          <Image
            src="/assets/photo-beast-style-burger-combo.jpg.avif"
            width={600}
            height={150}
            className="object-contain h-60 lg:h-96 w-full rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
            alt="Beast Style Burger Combo"
          />
        </div>
        <div className="bg-[#fed6d7] w-full lg:w-5/12 h-auto lg:h-96 py-10 px-5 flex flex-col justify-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
          <div className="ml-0 lg:ml-10 w-full lg:w-8/12">
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
            <button className=" text-white bg-red-500 font-bold py-3 px-5 rounded-3xl hover:bg-black">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
