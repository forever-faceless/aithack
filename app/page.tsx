"use client"
import Spline from "@splinetool/react-spline";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="bg-[#e3e3e3] w-screen h-screen relative overflow-x-hidden flex flex-col">
      <div className="absolute z-100">
        <Navbar />
      </div>
      <div className="w-screen h-screen bg-[#e3e3e3] ">
        <Hero />
      </div>
      <div id="features" className="w-screen h-screen">
        <Features />
      </div>
    </div>
  );
}
