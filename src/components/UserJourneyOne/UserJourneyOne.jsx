import React, { useEffect } from "react";
import "./style.css";
import Anna from "/img/anna.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserJourneyOne = () => {
  useEffect(() => {
    gsap.to(".mental-health-card", {
      y: -90, // Moves up
      ease: "none",
      scrollTrigger: {
        trigger: ".patient-journey-1",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out",
      },
    });

    gsap.to(".care-plan-card", {
      y: -40, // Moves up slightly more
      ease: "none",
      scrollTrigger: {
        trigger: ".patient-journey-1",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out",
      },
    });

    gsap.to(".physical-health-card", {
      y: -60, // Moves up the most
      ease: "none",
      scrollTrigger: {
        trigger: ".patient-journey-1",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out",
      },
    });
  }, []);

  return (
    <div className="patient-journey-1">
      <div className="patient-journey-header">
        <h2 className="patient-journey-title">
          Comprehensive care for complex symptoms
        </h2>
        <p className="patient-description">
          Comprehensive mental, physical, and emotional care for chronic health
          issues such as diabetes, obesity, mental health conditions, autoimmune
          disorders, endometriosis, and PCOS, with personalized solutions that
          truly work.
        </p>
      </div>

      <div className="patient-info">
        <div className="patient-name">Anna, 34</div>
        <div className="element-wrapper">
          <img src={Anna} alt="Anna, 34" className="element" />
        </div>
        {/* Mental Health */}
        <div className="patient-cards mental-health-card">
          <div className="patient-cards-title">Mental Health</div>
          <div className="patient-cards-des">Anxiety</div>
        </div>

        {/* Care Plan */}
        <div className="patient-cards care-plan-card">
          <div className="patient-cards-title">Care Plan</div>
          <p className="patient-cards-des">
            Whole Health Exam (include Pap smear & cervical cancer check) <br />
            Diabetes screen <br />
            Acupuncture for anxiety <br />
            Eliminate added sugars to reduce symptoms
          </p>
        </div>

        {/* Physical Health */}
        <div className="patient-cards physical-health-card">
          <div className="patient-cards-title">Physical Health</div>
          <p className="patient-cards-des">
            Due for a Pap Smear & cervical cancer check <br />
            Recent weight gain
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserJourneyOne;
