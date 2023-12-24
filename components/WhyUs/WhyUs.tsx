"use client";
import React from "react";
import { useInView, motion } from "framer-motion";
export default function WhyUs() {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);

  return (
    <div className="my-10" >
      <h1 className="text-5xl text-white text-center lg:self-start lg:px-10 ">
        Why Choose Us
      </h1>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 1 }}
          transition={{ duration: 1 }}
          className="px-14 py-16  flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10"
        >
          <div className="lg:pr-20 text-white ">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 1 }}
          transition={{ duration: 1 }}
          ref={ref2}
          className="px-14 py-16  flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start gap-10"
        >
          <div className="lg:pr-20 text-white ">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : 1 }}
          transition={{ duration: 1 }}
          ref={ref3}
          className="px-14 py-16  flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10"
        >
          <div className="lg:pr-20 text-white ">
            <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
              3. No Company Needed
            </span>
            <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
              No need for a Company
            </h1>
            <p className="text-white">
              You don&apos;t require a formal business entity to kickstart your
              online sales. UtopiaLink enables you to dive into online selling
              hassle-free, bypassing the need for company registration. Simply
              register, commence sales, and begin receiving payments without any
              bureaucratic hurdles or setup complications
            </p>
          </div>
          <img
            className="object-cover w-[40rem] h-[20rem] rounded-xl "
            src="https://images.pexels.com/photos/6863254/pexels-photo-6863254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : 1 }}
          transition={{ duration: 1 }}
          ref={ref4}
          className="px-14 py-16  flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start gap-10"
        >
          <div className="lg:pr-20 text-white ">
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
              you&apos;ve paid in fees. You&apos;ll also be able to see how many
              people have clicked on your link and how many have purchased your
              product.
            </p>
          </div>
          <img
            className="object-cover w-[80rem] h-[20rem] rounded-xl "
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
