"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { projects } from "@/constants/portfolio";
import "@/app/portfolio/circle.css";

const RotatePortfolioWheel = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [portfoios, setPortfoios] = useState(projects);
  const [angle, setAngle] = useState(90);

  function angleHandeler(e, index) {
    let newAngle = index * -45;
    setProjectIndex(index);
    setAngle(newAngle + 90);
  }

  useEffect(() => {
    var root = document.querySelector(":root");
    root.style.setProperty("--angle", `${angle}deg`);
  }, [angle]);

  return (
    <>
      <div className="grid pt-6  grid-cols-12">
        <div className="w-full flex flex-col col-start-6 col-span-6">
          <Link href={portfoios[projectIndex].githubLink}>
            <Image
              loading="lazy"
              className="w-full   aspect-video object-cover overflow-hidden"
              src={portfoios[projectIndex].imageUrl}
              alt={portfoios[projectIndex].projectName}
              width={900}
              height={500}
            />
          </Link>
          <div className="bg-slate-700 mt-2  px-4 rounded-full flex gap-4">
            {portfoios[projectIndex].staks.map((i, index) => (
              <div key={i + index}>{i}</div>
            ))}
          </div>
          <p className="text-[calc(1.1vw+0.2rem)]   mt-3 text-justify">
            caption: {portfoios[projectIndex].caption}
          </p>
        </div>
      </div>
      <div
        id="circle"
        className="absolute -left-[45vh]  top-[5vh] aspect-square rounded-full h-[90vh] border-[#F5F5F5] border-solid border-4"
      >
        {projects.map((i, index) => (
          <div
            key={index}
            onClick={(e) => angleHandeler(e, index)}
            className="item select-none"
          >
            <Image
              loading="lazy"
              className="w-full select-none rounded-full aspect-square object-cover overflow-hidden"
              src={i.imageUrl}
              alt={i.projectName}
              fill
            />
          </div>
        ))}
      </div>
      <div className="rounded-full -left-[20vh] top-[30vh] w-[40vh] aspect-square absolute deSclae bg-P3"></div>
    </>
  );
};

export default RotatePortfolioWheel;
