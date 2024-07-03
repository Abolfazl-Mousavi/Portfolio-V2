import React from "react";
import Image from "next/image";
import "../globals.css";
import pic from "@/assets/1e288e18-63cc-4623-baec-63d9531b229f.jpg";
import { name,fullName,about } from "@/constants/info";

const info = () => {
  return (
    <>
      <div className="flex justify-around flex-col items-center h-full">
        <div className="flex sm:flex-row-reverse flex-col  text-center items-center  justify-evenly">
          <Image
            className="mt-7 w-36 -top-16 aspect-[3/4] object-cover "
            src={pic}
            alt={fullName}
          />
          <div className="mt-3">
            <h2 className="text-xl">
              hello there! i am <span className="text-P4">{name}</span>
            </h2>
            <h1 className="text-2xl">
              a skilled{" "}
              <span className="text-[#5E37AC]">front-end developer</span>
              <span className="text-3xl blinking font-mono">|</span>
            </h1>
          </div>
        </div>
        <p className="px-8">{about}</p>
      </div>
      <div className="w-56 bg-P4 rounded-full aspect-square absolute -left-[4rem] -top-12 deSclae"></div>
    </>
  );
};

export default info;
