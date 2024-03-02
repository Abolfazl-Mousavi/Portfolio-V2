import React from "react";

import "./skills.css";
import SparkleLogoes from "@/components/SparkleLogoes";
const page = () => {
  return (
    <>
      <div className="h-screen relative flex items-center justify-center z-20 flex-col">
        <div id="content">
          <h4 className="text-center text-5xl font-semibold  mb-8">
            My Field of Work:
          </h4>
          <div className="grid sm:grid-rows-3 text-center place-items-center mx-auto skills">
            <div>
              <span>React</span>
              <span>Responsive Design</span>
              <span>Three.js</span>
              <span>Cross-Browser</span>
              <span>REST-API</span>
              <span>NEXT.js</span>
            </div>
            <div>
              <span>GraghQl</span>
              <span>Sanity</span>
              <span>MERN Stack</span>
              <span>WCAG</span>
              <span>SEO</span>
              <span>Artificial Inteligence</span>
              <span>Performance Optimization</span>
              <span>PWA</span>
            </div>

            <div>
              <span>UI/UX</span>
              <span>GitHub</span>
              <span>Webpack</span>
              <span>TailwindCSS</span>
              <span>ReactNative</span>
              <span>Discord Bots</span>
            </div>
          </div>
        </div>
      </div>
      <SparkleLogoes />
      <div onClick={history.back()} className="w-56 bg-P5 rounded-full aspect-square absolute  left-[42%] -top-24 deSclae"></div>
    </>
  );
};

export default page;
