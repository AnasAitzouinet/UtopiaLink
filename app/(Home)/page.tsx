"use client";

import UButton from "@/components/Costume Inputs/Button";
import Navbar from "@/components/NavBa/Navbar";
import { Kanit } from "next/font/google";
import { Star } from "lucide-react";
import Features from "@/components/Cards/Features";

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
  return (
    <main
      className="bg-[#000000]   relative overflow-hidden"
      style={{
        backgroundImage: "url(/bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "",
        backgroundPositionX: "250px",
        backgroundPositionY: "200px",
      }}
    >
      <Navbar />
      <section className="w-screen overflow-hidden h-screen flex pt-14 ">
        <div
          className={`flex flex-col items-center text-white justify-center px-5 h-full lg:w-[50%] w-full `}
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
      </section>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <h1 className="text-5xl text-white lg:self-start lg:px-10">
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
      </div>

      <div className="my-10">
        <h1 className="text-5xl text-white lg:self-start lg:px-10">
          Why Choose Us
        </h1>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="px-14 py-16  flex items-center justify-start gap-10">
            <div className="pr-20 text-white ">
              <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
                1. Easy to Use
              </span>
              <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
                No-Code Payment Gateway
              </h1>
              <p className="text-white ">
                Utilize our no-code payment gateway to commence online sales
                effortlessly, regardless of technical expertise. Simply copy and
                paste a link—no technical know-how needed! Get started with ease
                and begin your online selling journey hassle-free.
              </p>
            </div>
            <img
              className="object-cover pr-2 w-[55rem] h-[20rem] rounded-xl "
              src="https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-man-coding-on-computers-sitting-at-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="px-14 py-16  flex flex-row-reverse items-center justify-start gap-10">
            <div className="pr-20 text-white ">
              <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
                2. No Risk Involved
              </span>
              <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
                We take on all the risk
              </h1>
              <p className="text-white">
                At UtopiaLink, we&apos;ve got you covered. Our commitment is
                simple: Zero risk, maximum potential. We bear the risk on your
                behalf—no sales, no charges. It&apos;s a risk-free partnership
                designed to support your success. You focus on your goals; we
                handle the rest, ensuring that your journey forward is without
                financial concerns or burdens. It&apos;s that straightforward.
              </p>
            </div>
            <img
              className="object-cover w-[60rem] h-[20rem] rounded-xl "
              src="https://images.pexels.com/photos/7172857/pexels-photo-7172857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="px-14 py-16  flex flex-row items-center justify-start gap-10">
            <div className="pr-20 text-white ">
              <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
                3. No Company Needed
              </span>
              <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
                No need for a Company
              </h1>
              <p className="text-white">
                You don&apos;t require a formal business entity to kickstart
                your online sales. UtopiaLink enables you to dive into online
                selling hassle-free, bypassing the need for company
                registration. Simply register, commence sales, and begin
                receiving payments without any bureaucratic hurdles or setup
                complications
              </p>
            </div>
            <img
              className="object-cover w-[40rem] h-[20rem] rounded-xl "
              src="https://images.pexels.com/photos/6863254/pexels-photo-6863254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="px-14 py-16  flex flex-row-reverse items-center justify-start gap-10">
            <div className="pr-20 text-white ">
              <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
                4. Analyctics
              </span>
              <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
                Real-Time Analytics
              </h1>
              <p className="text-white">
                You can track your sales and payments in real-time with our
                analytics dashboard. You&apos;ll be able to see how many sales
                you&apos;ve made, how much you&apos;ve earned, and how much
                you&apos;ve paid in fees. You&apos;ll also be able to see how
                many people have clicked on your link and how many have
                purchased your product.
              </p>
            </div>
            <img
              className="object-cover w-[80rem] h-[20rem] rounded-xl "
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
