import React from "react";
import Image from "next/image";
import Link from "next/link";

import sakuta from "@/assets/sakutaTired.png";
import { FiInstagram } from "react-icons/fi";
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import {
  twitter,
  instagram,
  telegram,
  youtube,
  github,
} from "@/constants/social";
const animemode = () => {
  return (
    <div className="text-[#D9D9D9]">
      <div className="mt-7 w-auto my-20">
        <Image
          className=" sm:p-0 p-3 w-52 rounded-md sm:w-40 mx-auto"
          src={sakuta}
          alt="sakuta"
        />
        <h5 className="text-center sm:text-lg  text-2xl mt-3">
          I AM STILL WORKING ON THIS PART
        </h5>
        <p className="sm:text-sm font-light mx-4  text-center mt-2">
          basically, it&#39;s an anime-style ChatBot that mimics me as an anime
          girl
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>stay tuned for new updates in my social media:</p>
        <div className="mt-2 w-full flex justify-evenly text-2xl">
          <Link href={instagram} rel="me">
            <FiInstagram />
          </Link>
          <Link href={telegram} rel="me">
            <FaTelegramPlane />
          </Link>
          <Link href={twitter} rel="me">
            <FaTwitter />
          </Link>
          <Link href={youtube} rel="me">
            <FaYoutube />
          </Link>
          <Link href={github} rel="me">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default animemode;
