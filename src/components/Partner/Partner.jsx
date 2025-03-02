import React, { useEffect } from "react";
import Partners from "/img/Partner.png";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const Partner = () => {
  //* GSAP Animation
  useEffect(() => {
    const section = document.querySelector(".section");

    // 🎯 **Slide + Scale + Border-Radius Change**
    gsap.fromTo(
      section,
      { y: 60, scale: 0.8, filter: "blur(32px)", borderRadius: "32px" }, // Smaller with rounded corners
      {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true, // Follows scroll progress
        },
        y: 0, // Moves to normal position
        x: 0, // Moves to normal position
        scale: 0.9, // Grows bigger on scroll up
        borderRadius: "32px", // Removes rounded corners
        ease: "power2.out",
        filter: "blur(0px)",
      }
    );

    const sections = document.querySelectorAll(".partner-text-wrapper");

    sections.forEach((section, index) => {
      const textElements = section.querySelectorAll(".partner-text");
      let splitInstances = [];

      textElements.forEach((element) => {
        const text = new SplitType(element, { types: "words" });
        splitInstances.push(text);

        gsap.fromTo(
          text.words,
          {
            y: 15,
            filter: "blur(12px)",
          },
          {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
              scrub: false,
            },
            y: 0,
            filter: "blur(0px)",
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.6,
            delay: index * 0.3,
          }
        );
      });

      return () => splitInstances.forEach((instance) => instance.revert());
    });
  }, []);

  return (
    <div className="section">
      <div className="frame">
        <div className="div">
          <img className="partner-image" alt="Image" src={Partners} />
          <div className="our-partnerships">OUR PARTNERSHIPS</div>

          <div className="text-wrapper">Meet our specialist partners</div>

          <p className="text-wrapper-1">
            As a member, your Care Team extends beyond Tia: you’re also
            supported by providers at top-tier health systems—including
            Cedars-Sinai, UCSF Health and CommonSpirit Health—that make it easy
            to get specialty care when you need it.
          </p>
        </div>
        <div className="frame-2">
          <div className="div-2 partner-text-wrapper">
            <div className="text-wrapper-2 partner-text">Cidars Sinai</div>

            <p className="text-wrapper-3 partner-text">
              Renowned for advanced medical research and innovative treatments,
              Cedars-Sinai provides specialized care in cardiology, oncology,
              and women&#39;s health.
            </p>
          </div>

          <div className="div-2 partner-text-wrapper">
            <div className="text-wrapper-2 partner-text">UCSF</div>

            <p className="text-wrapper-3 partner-text">
              As a leader in academic medicine, UCSF Health brings expertise in
              complex diagnoses, pioneering treatments, and cutting-edge
              research.
            </p>
          </div>

          <div className="div-2 partner-text-wrapper">
            <div className="text-wrapper-2 partner-text">Dignity Health</div>

            <p className="text-wrapper-3 partner-text">
              With a mission-driven approach to care, Dignity Health focuses on
              compassionate, high-quality healthcare across a vast network of
              providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
