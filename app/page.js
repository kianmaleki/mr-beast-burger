import NavBar from "./components/NavBAr";
import Baners from "./components/Baners";
import Image from "next/image";
import Link from "next/link";
import Burerguy from "./components/Burgerguy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <NavBar />
      <Baners />
      <Burerguy />
    </main>
  );
}
