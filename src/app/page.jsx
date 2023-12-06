"use client";
import { useEffect } from "react";
import Link from "next/link";

import "./dataSets.css";


export default function Home() {
  //combonations
  const combo = [
    { configuration: 1, roundness: 3 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 4 },
    { configuration: 2, roundness: 1 },
    { configuration: 2, roundness: 1 },
    { configuration: 3, roundness: 2 },
    { configuration: 3, roundness: 5 },
  ];
  let previous = 0;


  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  useEffect(() => {
    //adding font
    const wrapper = document.getElementById("wrapper");
    const intervalW = setInterval(() => {
      const index = uniqueRand(0, combo.length - 1, previous),
        combination = combo[index];

      wrapper.dataset.configuration = combination.configuration;
      wrapper.dataset.roundness = combination.roundness;

      previous = index;
    }, 3000);

    return () => clearInterval(intervalW);
  }, []);

  return (
    <>
      <div
        id="wrapper"
        className="relative w-[60svw] aspect-[1.618]"
        data-configuration="1"
        data-roundness="3"
      >
        <Link href={"info"} className="shape">
          <span>Info</span>
        </Link>
        <Link href={"skills"} className="shape">
          <span>My Skills</span>
        </Link>
        <Link href={"resume"} className="shape">
          <span>resume</span>
        </Link>
        <Link href={"portfolio"} className="shape">
          <span>POTFOLIO</span>
        </Link>
        <Link href={"moreaboutme"} className="shape">
          <div>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
            <span>&nbsp;</span>
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>E</span>
          </div>
        </Link>
        <Link href={"contactme"} className="shape ">
          <span>contactme</span>
        </Link>
      </div>
      <Link
        href={"animemode"}
        className="inline absolute text-Q3 text-[0.8rem] bottom-2 left-2"
      >
        mitsuketa! swich to anime mode
      </Link>
    </>
  );
}
