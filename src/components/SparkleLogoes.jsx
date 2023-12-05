"use client";
import React, { useState, useEffect } from "react";
import {
  TbBrandNextjs,
  TbBrandThreejs,
  TbBrandVscode,
  TbBrandReact,
  TbBrandGithub,
  TbBrandTypescript,
  TbBrandOpenai,
  TbBrandFigma,
} from "react-icons/tb";
import { SiSolidity, SiGooglecloud, SiMyanimelist } from "react-icons/si";

const SparkleLogoes = () => {
  useEffect(() => {
    //random point
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    //elements
    const parentElement = document.getElementById("sparkle");
    const svgs = document.querySelectorAll("svg");
    const element1 = document.getElementById("content");

    setTopNLeft();
    const setPosition = setInterval(setTopNLeft, 1000);
    function setTopNLeft() {
      for (const svg of svgs) {
        const randomX = Math.floor(Math.random() * viewportWidth);
        const randomY = Math.floor(Math.random() * viewportHeight);
        svg.style.top = `${randomY - 80}px`;
        svg.style.left = `${randomX - 80}px`;

        //check for overlap
        let rect1 = element1.getBoundingClientRect();
        let rect2 = svg.getBoundingClientRect();

        const overlap = !(
          rect1.right < rect2.left ||
          rect1.left > rect2.right ||
          rect1.bottom < rect2.top ||
          rect1.top > rect2.bottom
        );

        overlap
          ? (svg.style.display = "none")
          : (svg.style.display = "inline-block");
      }
    }
    return () => {
      clearInterval(setPosition);
    };
  }, []);

  return (
    <div id="sparkle" className="absolute top-0 left-0 w-screen h-screen">
      <TbBrandNextjs />
      <TbBrandReact />
      <TbBrandVscode />
      <TbBrandThreejs />
      <SiGooglecloud />
      <SiSolidity />
      <TbBrandGithub />
      <TbBrandTypescript />
      <TbBrandOpenai />
      <TbBrandFigma />
      <SiMyanimelist />
    </div>
  );
};

export default SparkleLogoes;
