"use client";

import UButton from "@/components/Costume Inputs/Button";
import Navbar from "@/components/NavBa/Navbar";
import { Kanit } from "next/font/google";
import { Star } from "lucide-react";
import Features from "@/components/Cards/Features";
import WhyUs from "@/components/WhyUs/WhyUs";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import FAQ from "@/components/Faq/FAQ";
import Footer from "@/components/Footer/Footer";
const FeaturesItems = [
  {
    title: "Effortless Payments Await with Our Link",
    description: "Go Global Hassle-free, No International LLC Needed!",
    image: "/link.svg",
  },
  {
    title: "Your First No-Code Payment Gateway",
    description: "Easy Transactions at the Touch of a Button!",
    image: "/bu.svg",
  },
  {
    title: "No Upfront Costs Required",
    description: "Get Started with No Money Down and No Risk!",
    image: "/vault.svg",
  },
  {
    title: "No Website? No Problem for Resellers",
    description: "Start Selling Online with No Website Required!",
    image: "/pay.svg",
  },
];

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <main
      className="bg-[#000000]   relative overflow-hidden"
      style={{
        backgroundImage: "url(/bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "",
        backgroundPositionX: "350px",
        backgroundPositionY: "500px",
      }}
    >
      <Navbar />
      {/* <img src="/bg.svg" className="absolute top-0 -right-20 z-0 bg-transparent " alt="" /> */}
      <motion.section
        id="home"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-screen relative overflow-hidden h-screen flex pt-14 "
      >
        <div
          className={`flex flex-col items-center  text-white justify-center px-5 h-full lg:w-[50%] w-full `}
        >
          <div
            className="
          w-full flex items-center justify-center gap-3"
          >
            <div className="flex gap-1 ">
              <Star className="fill-yellow-300 text-yellow-300 w-5 h-5" />
              <Star className="fill-yellow-300 text-yellow-300 w-5 h-5" />
              <Star className="fill-yellow-300 text-yellow-300 w-5 h-5" />
              <Star className="fill-yellow-300 text-yellow-300 w-5 h-5" />
              <Star className="fill-yellow-300 text-yellow-300 w-5 h-5" />
            </div>
            <h1 className="text-md text-gray-300  ">
              Based on <span className="text-white">10,000+</span> reviews
            </h1>
          </div>
          <h1 className="text-6xl mt-5">
            Revolutionize <br></br> Your Finances
          </h1>
          <h2 className="text-xl py-5 text-gray-300">
            Effortless Transactions at Your Fingertips
          </h2>
          <UButton
            text="Get Started"
            className="w-[55%] border-none
        bg-emerald-700 text-white hover:bg-emerald-600 
          transition-all duration-500
          "
          />
          <div className="pt-10 flex items-center justify-center gap-2">
            Built on top of
            <img src="/stripe.png" alt="" className="h-16 object-cover" />
          </div>
        </div>
        <div
          className="w-[50%] lg:flex hidden 
        items-center justify-center gap-4"
        >
          <img
            src="https://images.pexels.com/photos/7620629/pexels-photo-7620629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover  h-[50%] xl:h-[80%] rounded-xl "
          />
          <img
            src="https://images.pexels.com/photos/6964329/pexels-photo-6964329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover  h-[50%] xl:h-[80%]  rounded-xl"
          />
        </div>
      </motion.section>
      <motion.div
      id="features"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-full h-full items-center justify-center "
      >
        <h1 className="text-5xl text-white lg:self-start lg:px-10 ">
          What we Offer
        </h1>
        <div
          className="flex w-full h-full gap-5 py-5 flex-col items-center justify-center sm:grid 
        sm:grid-cols-2 sm:place-items-center md:grid-cols-3 md:place-items-center lg:grid-cols-4 
        "
        >
          {FeaturesItems.map((item) => (
            <Features
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </motion.div>

      <WhyUs />

      <FAQ />

      <Footer/>
    </main>
  );
}
