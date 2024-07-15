import NavBar from "./components/NavBAr";
import Baners from "./components/Baners";
import Image from "next/image";
import Link from "next/link";
import Burerguy from "./components/Burgerguy";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <NavBar />
      <Baners />
      <Burerguy />
      <div className="text-left w-11/12 mt-16">
        <h3 className="text-3xl font-bold">Jimmy’s Favorites</h3>
      </div>
      <div className="flex justify-evenly items-start w-full">
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
    </main>
  );
}
