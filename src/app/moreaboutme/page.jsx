import React from "react";
import Link from "next/link";
import { myanimelist } from "@/constants/social";

import Image from "next/image";
import izumi from "@/assets/moreaboutme/74-748537_izumi-eromanga-sensei-hd-png-download.png";
import bocchi from "@/assets/moreaboutme/gotou-hitori-illustrations-artist-shiroshi-v0-4t8m52l8kvr91.jpg";
import ganyu from "@/assets/moreaboutme/1130246.jpg";
import spyfamily from "@/assets/moreaboutme/here-is-a-hq-transparent-png-of-the-spy-family-that-i-put-v0-kr03qrk4f0i91.png";

import "./moreaboutme.css";

const styles = {
  container: "sm:w-10/12 sm:max-w-[1100px] w-full",
};
const page = () => {
  return (
    <>
      <div className="mx-auto  mt-32  flex flex-col items-center ">
        <h3 className="sm:text-5xl text-lg contents text-center">what do i do other then coding?</h3>
        <div
          id="anime"
          className={`sm:flex sm:justify-evenly mt-20 px-10 ${styles.container} `}
        >
          <div className="flex flex-col justify-center px-10">
            <h4 className="text-5xl">anime</h4>
            <p className="text-2xl sm:pr-44">
              anime is my favourite hobby i watched over 3000 episode anime.
              checkout my{" "}
              <Link
                href={myanimelist}
                rel="me"
                className="underline text-Q5 inline"
              >
                myanimelist profile
              </Link>
            </p>
          </div>
          <Image
            className="h-[500px] w-auto"
            src={spyfamily}
            alt={"spy X family"}
            width={640}
            height={960}
            priority
          />
        </div>
        <div id="game" className=" relative mt-20 block left-0 right-0">
          <Image
            className="w-screen h-auto"
            src={ganyu}
            alt="ganyu"
            width={3840}
            height={2160}
            priority
          />
          <div className={`absolute top-5 left-2 sm:top-20 sm:left-40 ${styles.container} `}>
            <h4 className="sm:text-5xl">i play games</h4>
            <p className="sm:text-2xl">by games i mean gaccha games</p>
          </div>
        </div>
        <div id="draw" className={styles.container}>
          <div className="grid place-items-center">
            <Image
              src={izumi}
              alt={"izumi sagiri"}
              width={860}
              height={895}
              priority
            />
            <h4 className="text-5xl text-center">i also draw</h4>
            <p className="sm:text-2xl text-center">
              tell me if you want a commission from me
            </p>
          </div>
        </div>
        <div
          id="music"
          className={`sm:flex flex-row-reverse sm:justify-evenly mt-28 ${styles.container}`}
        >
          <div className="pt-20">
            <h4 className="text-5xl text-right">guitar</h4>
            <p className="text-2xl text-right">
              i am learning guitar right now
            </p>
          </div>
          <Image
            src={bocchi}
            alt={"bocchi-chan"}
            title="artist:SHIROSHI"
            width={640}
            height={738}
            priority
          />
        </div>
      </div>
      <div className="w-56 bg-P6 rounded-full aspect-square absolute left-[40%] -top-[40%] deSclae"></div>
    </>
  );
};

export default page;
