import "./gradiant.css";
import React from "react";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import {
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  twitter,
  instagram,
  telegram,
  youtube,
  github,
} from "@/constants/social";
import RotateOval from "@/components/RotateOval";

const contactme = () => {
  return (
    <>
      <div className="text-3xl">
        <p className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 gradiant">
          my social media
        </p>
        <div className="oval-container  border-solid border-2 border-[#A071FF] relative mx-[50px] rounded-[50%] w-64 h-36 sm:w-[30rem] sm:h-[15rem]">
          <div className="oval-element absolute w-[50px] aspect-square grid place-items-center">
            <Link href={instagram} rel="me">
              <FiInstagram />
            </Link>
          </div>
          <div className="oval-element absolute w-[50px] aspect-square grid place-items-center">
            <Link href={telegram} rel="me">
              <FaTelegramPlane />
            </Link>
          </div>
          <div className="oval-element absolute w-[50px] aspect-square grid place-items-center">
            <Link href={twitter} rel="me">
              <FaTwitter />
            </Link>
          </div>
          <div className="oval-element absolute w-[50px] aspect-square grid place-items-center">
            <Link href={youtube} rel="me">
              <FaYoutube />
            </Link>
          </div>
          <div className="oval-element absolute w-[50px] aspect-square grid place-items-center">
            <Link href={github} rel="me">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <div className="rounded-full -right-32 md:flex  sm:w-64 hidden aspect-square absolute deSclae bg-P1"></div>
      <RotateOval />
    </>
  );
};

export default contactme;
