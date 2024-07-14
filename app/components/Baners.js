import Image from "next/image";

export default function Baners() {
  return (
    <>
      <div className="relative w-screen h-[500px] top-24 flex justify-end items-center mb-40">
        <Image
          src="/assets/hamburger-with-picture-word-burger-it_111797-1442.avif"
          alt="baner images"
          layout="fill"
          objectFit="cover"
          className="z-[-1]"
        />
        <div className="right-0 flex items-end justify-end p-5">
          <div className="grid grid-cols-4 gap-4 z-[-1]">
            <div className="animatedImage delay1">
              <Image
                src="/assets/chris-style-label.svg"
                alt="baner images"
                width={250}
                height={250}
              />
            </div>
            <div className="animatedImage delay2">
              <Image
                src="/assets/beast-style-label.svg"
                alt="baner images"
                width={250}
                height={250}
              />
            </div>
            <div className="animatedImage delay3">
              <Image
                src="/assets/karl-s-grilled-cheese-label.svg"
                alt="baner images"
                width={250}
                height={250}
              />
            </div>
            <div className="animatedImage delay4">
              <Image
                src="/assets/chandle-style-label.svg"
                alt="baner images"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
