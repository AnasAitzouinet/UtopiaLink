import React from 'react'

export default function trash() {
  return (
    <div> <div className="py-5">
    <h1 className="text-5xl text-white lg:self-start lg:px-10">
      How to Get Started
      {/* <span className="text-emerald-500">Costumers</span> */}
    </h1>
    <div className="w-full flex flex-col items-center justify-center">
      <div className="px-14 py-10  flex items-center justify-start gap-10">
        <div className="pr-20 text-white ">
          <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
            1. Setting up your account
          </span>
          <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
            Create An Account
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptatibus, ipsa, quod, quibusdam voluptatem autem cupiditate
            repellendus iusto nemo quae voluptatum? Quisquam, quibusdam
            voluptatem. Quisquam, quibusdam voluptatem.
          </p>
        </div>
        <img
          className="object-cover w-[40rem] h-[20rem] rounded-xl "
          src="/signup.png"
          alt=""
        />
      </div>
      <div className="px-14 py-10  flex flex-row-reverse items-center justify-start gap-10">
        <div className="pr-20 text-white ">
          <span className="rounded-full border-2  border-[#C0F497] text-[#C0F497] px-2 py-1 text-center  ">
            1. Setting up your account
          </span>
          <h1 className="text-4xl font-bold pb-8 pt-3 text-emerald-500 ">
            Create An Account
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptatibus, ipsa, quod, quibusdam voluptatem autem cupiditate
            repellendus iusto nemo quae voluptatum? Quisquam, quibusdam
            voluptatem. Quisquam, quibusdam voluptatem.
          </p>
        </div>
        <img
          className="object-cover w-[40rem] h-[20rem] rounded-xl "
          src="/signup.png"
          alt=""
        />
      </div>
    </div>
  </div></div>
  )
}
