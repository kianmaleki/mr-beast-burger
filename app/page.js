import NavBar from "./components/NavBAr";
import HeaderBaners from "./components/HeaderBaners";
import Image from "next/image";
import Link from "next/link";
import Burerguy from "./components/Burgerguy";
import Card from "./components/Card";
import FooterBaners from "./components/FooterBaners";
import MainFooter from "./components/MainFooter";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <NavBar />
      <HeaderBaners />
      <Burerguy />
      <div className="text-left w-11/12 mt-16">
        <h3 className="text-3xl font-bold">Jimmy’s Favorites</h3>
      </div>
      <div className="flex flex-wrap justify-evenly items-center w-full mt-8 md:space-y-0">
        <Card
          src="chocolate-chip-cookie.png.avif"
          text="chocolate chip cookie"
        />
        <Card
          src="chicken-sandwich-combo.png.avif"
          text="chicken sandwich combo"
        />
        <Card src="beast-style-fries.png.avif" text="beast style fries" />
        <Card
          src="beast-style-burger-combo.png.avif"
          text="beast style burger combo"
        />
      </div>
      <FooterBaners />
      <Link
        className="fixed left-0 bottom-24 z-10 px-3 py-3 rounded-r-full bg-black text-white text-3xl"
        href="javascript:void(0);"
        title="Accessibility Tools"
        role="link"
      >
        <span className="pojo-sr-only sr-only">Open toolbar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
          width="1em"
        >
          <title>Accessibility Tools</title>
          <g>
            <path d="M60.4,78.9c-2.2,4.1-5.3,7.4-9.2,9.8c-4,2.4-8.3,3.6-13,3.6c-6.9,0-12.8-2.4-17.7-7.3c-4.9-4.9-7.3-10.8-7.3-17.7c0-5,1.4-9.5,4.1-13.7c2.7-4.2,6.4-7.2,10.9-9.2l-0.9-7.3c-6.3,2.3-11.4,6.2-15.3,11.8C7.9,54.4,6,60.6,6,67.3c0,5.8,1.4,11.2,4.3,16.1s6.8,8.8,11.7,11.7c4.9,2.9,10.3,4.3,16.1,4.3c7,0,13.3-2.1,18.9-6.2c5.7-4.1,9.6-9.5,11.7-16.2l-5.7-11.4C63.5,70.4,62.5,74.8,60.4,78.9z"></path>
            <path d="M93.8,71.3l-11.1,5.5L70,51.4c-0.6-1.3-1.7-2-3.2-2H41.3l-0.9-7.2h22.7v-7.2H39.6L37.5,19c2.5,0.3,4.8-0.5,6.7-2.3c1.9-1.8,2.9-4,2.9-6.6c0-2.5-0.9-4.6-2.6-6.3c-1.8-1.8-3.9-2.6-6.3-2.6c-2,0-3.8,0.6-5.4,1.8c-1.6,1.2-2.7,2.7-3.2,4.6c-0.3,1-0.4,1.8-0.3,2.3l5.4,43.5c0.1,0.9,0.5,1.6,1.2,2.3c0.7,0.6,1.5,0.9,2.4,0.9h26.4l13.4,26.7c0.6,1.3,1.7,2,3.2,2c0.6,0,1.1-0.1,1.6-0.4L97,77.7L93.8,71.3z"></path>
          </g>
        </svg>
      </Link>
      <MainFooter />
    </main>
  );
}
