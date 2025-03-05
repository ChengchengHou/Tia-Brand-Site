import React, { useEffect, useRef } from "react";
import Granim from "granim"; // ✅ Import Granim.js
import "./style.css";

const GradientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      console.log("Initializing Granim Gradient...");

      new Granim({
        element: canvasRef.current, // ✅ Attach to the canvas
        direction: "radial", // "left-right", "top-bottom", "radial", etc.
        isPausedWhenNotInView: true,
        states: {
          "default-state": {
            gradients: [
              ["#D6DEBA", "#F5907A"],
              ["#DCE1BA", "#8FA26D"],
              ["#D4A8A8", "#D4A8A8"],
            ],
            transitionSpeed: 4000,
          },
        },
      });

      console.log("Granim Gradient Initialized!");
    } else {
      console.error("Canvas element is missing!");
    }
  }, []);

  return (
    <div className="background--custom">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default GradientBackground;
