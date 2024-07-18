import Image from "next/image";

export default function HeaderBaners() {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[500px] top-0 flex justify-end items-center mb-4 bg-[#fe9dbc] z-[-1]">
        <Image
          src="/assets/sandwich-banner.png.avif"
          alt="banner image"
          layout="fill"
          objectFit="contain"
          className="z-[-1]"
        />
        <div className="right-0 flex items-end justify-center p-5 w-full">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-14 z-[-1]">
            {[
              "chris-style-label.svg",
              "beast-style-label.svg",
              "karl-s-grilled-cheese-label.svg",
              "chandle-style-label.svg",
            ].map((src, index) => (
              <div className={`animatedImage delay${index + 1}`} key={index}>
                <Image
                  src={`/assets/${src}`}
                  alt="banner label"
                  width={250}
                  height={250}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
