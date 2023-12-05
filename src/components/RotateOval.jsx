"use client";
import { useEffect } from "react";

const RotateOval = () => {
  useEffect(() => {
    const ovalContainer = document.querySelector(".oval-container");
    const ovalElements = document.querySelectorAll(".oval-element");
    const ovalWidth = ovalContainer.offsetWidth;
    const ovalHeight = ovalContainer.offsetHeight;
    const centerX = ovalWidth / 2;
    const centerY = ovalHeight / 2;
    const radiusX = ovalWidth / 2;
    const radiusY = ovalHeight / 2;
    let angle = 0;

    function moveElements() {
      angle += 0.005;
      ovalElements.forEach((element, index) => {
        const x =
          centerX +
          radiusX *
            Math.cos(angle + (index * 2 * Math.PI) / ovalElements.length);
        const y =
          centerY +
          radiusY *
            Math.sin(angle + (index * 2 * Math.PI) / ovalElements.length);
        element.style.transform = `translate(calc(-25px + ${x}px), calc(-25px + ${y}px))`;
      });
      requestAnimationFrame(moveElements);
    }

    moveElements();
  }, []);
};

export default RotateOval;
