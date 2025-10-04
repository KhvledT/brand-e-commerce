import React from "react";
import Image from "next/image";
import heroSection1 from "@/assets/imgs/home page imgs/heroSection 01.svg";
import heroSection2 from "@/assets/imgs/home page imgs/heroSection 02.svg";

export default function HeroSection() {
  return (
    <>
      {/* First Hero Section */}
      <section className="relative w-full bg-white flex flex-col items-center justify-center">
        <Image
          src={heroSection1}
          alt="Hero Section 1"
          width={600}
            height={600}
            className="w-full h-auto"
        />
        <div className="relative w-full h-auto">
          <Image
            src={heroSection2}
            alt="Hero Section 2"
            width={600}
            height={600}
            className="w-full h-auto -translate-y-10"
          />
        </div>
      </section>
    </>
  );
}
