import React, { useEffect } from "react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aetna from "/img/Aetna.svg";
import Anthem from "/img/Anthem.svg";
import BlueShield from "/img/BCBS.svg";
import Cigna from "/img/Cigna.svg";
import EHN from "/img/EHN.svg";
import Emblem from "/img/Emblem.svg";
import IntelCare from "/img/Intel-Care.svg";
import Oscar from "/img/Oscar.svg";
import UnitedHealthcare from "/img/United-Healthcare.svg";
import BrightHeath from "/img/Bright-Health.svg";
import { Button } from "../../components/Button";

gsap.registerPlugin(ScrollTrigger);

export const Insurance = () => {
  useEffect(() => {
    const pills = document.querySelectorAll(".insurance-pill");
    const section = document.querySelector(".insurance-section");

    // 🎯 Step 1: Scatter the logos when scrolling up
    gsap.fromTo(
      pills,
      {
        opacity: 1,
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-40, 40), // More rotation for a natural scatter
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        ease: "power3.out", // Smoother easing
        stagger: 0.2, // Slower stagger for a more elegant reveal
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 20%",
          scrub: 4, // Increased scrub for better flow
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // 🎯 Step 2: Move logos to grid when scrolling down
    gsap.to(pills, {
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
        end: "bottom center",
        scrub: 1, // Higher scrub makes movement smoother
        toggleActions: "play reverse play reverse",
      },
      x: 0,
      y: 0,
      rotation: 0,
      ease: "power3.out",
      stagger: 0.2, // Allows each logo to flow smoothly
    });
  }, []);

  return (
    <div className="insurance-section">
      <div className="div-13">
        <div className="div-12">
          <div className="overline">YOUR CARE, COVERED</div>
          <div className="text-wrapper-6">Yes, we take insurance</div>
          <p className="text-wrapper-7">
            As a member, your Care Team extends beyond Tia: you’re also
            supported by providers at top-tier health systems—including
            Cedars-Sinai, UCSF Health and CommonSpirit Health—that make it easy
            to get specialty care when you need it.
          </p>
        </div>
        <div className="insurance-logos">
          <img className="insurance-pill" src={Aetna} alt="Aetna" />
          <img className="insurance-pill" src={Anthem} alt="Anthem" />
          <img className="insurance-pill" src={BlueShield} alt="BlueShield" />
          <img className="insurance-pill" src={Cigna} alt="Cigna" />
          <img className="insurance-pill" src={EHN} alt="EHN" />
          <img className="insurance-pill" src={Emblem} alt="EmblemHealth" />
          <img className="insurance-pill" src={IntelCare} alt="IntelCare" />
          <img className="insurance-pill" src={Oscar} alt="Oscar" />
          <img
            className="insurance-pill"
            src={UnitedHealthcare}
            alt="UnitedHealthcare"
          />
          <img
            className="insurance-pill"
            src={BrightHeath}
            alt="BrightHealth"
          />
        </div>
        <Button
          className="design-component-instance-node"
          color="primary"
          label="See if’you’re in network"
          size="large"
          stateProp="enabled"
          variant="contained"
        />
      </div>
    </div>
  );
};
export default Insurance;
