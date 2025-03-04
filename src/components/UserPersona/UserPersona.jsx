import React, { useEffect, useRef } from "react";
import "./style.css";
import Anna from "/img/anna.jpg";
import Cath from "/img/Cath.jpg";
import Maddie from "/img/Maddie.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserPersona = () => {
  const underlineRef = useRef(null); // Declare ref properly
  useEffect(() => {
    //line effect
    // Ensure the SVG path is selected AFTER the component mounts
    setTimeout(() => {
      const path = document.querySelector(".animated-path");

      if (path) {
        const pathLength = path.getTotalLength();

        // Set initial stroke properties
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
          stroke: "#EF308D", // Ensure stroke is visible
          strokeWidth: 2, // Ensure stroke is thick enough
          fill: "none", // Prevent accidental fill overriding stroke
        });

        // Animate the stroke offset on scroll
        gsap.to(path, {
          strokeDashoffset: 0, // Line draws from start to finish
          duration: 10, // Duration of the animation
          ease: "none",
          scrollTrigger: {
            trigger: ".svg-container",
            start: "top 30%", // Animation starts when SVG enters viewport
            end: "bottom 50%",
            scrub: 4, // Ensures smooth animation on scroll
          },
        });

        if (underlineRef.current) {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".patient-journey", // Correct selector
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          });

          tl.to(underlineRef.current, { stroke: "#831A4A", duration: 1 })
            .to(underlineRef.current, { stroke: "#D72638", duration: 1 })
            .to(underlineRef.current, { stroke: "#FF914D", duration: 1 })
            .to(underlineRef.current, { stroke: "#FFD166", duration: 1 });
        }
      }
    }, 500); // Delay to ensure DOM elements have loaded properly

    //displace effect
    gsap.to(".mental-health-card", {
      y: -90, // Moves up
      x: 96,
      ease: "none",
      scrollTrigger: {
        trigger: ".patient-journey",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out",
      },
    });

    gsap.to(".care-plan-card", {
      y: -80, // Moves up slightly more
      x: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".patient-journey",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out",
      },
    });

    gsap.to(".physical-health-card", {
      y: -45, // Moves up the most
      x: -96,
      ease: "none",
      scrollTrigger: {
        trigger: ".patient-journey",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out",
      },
    });
  }, []);

  return (
    <div>
      <div className="patient-journey">
        <div className="patient-journey-header">
          <h2 className="patient-journey-title">
            <span className="italic">Comprehensive care</span> for complex
            symptoms
          </h2>
          <p id="changing-text" className="patient-description">
            Comprehensive, personalized care for chronic conditions like
            diabetes, obesity, mental health issues, autoimmune disorders,
            endometriosis, and PCOS, combined with essential screenings such as
            Pap smears, breast exams, pelvic assessments, cardio-metabolic
            tests, hormonal evaluations, and immunoglobulin tests, plus access
            to top specialists from leading institutions like UCSF and
            Cedars-Sinai for expert guidance in managing complex symptoms.
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
            <ul className="patient-cards-des">
              <li>Anxiety</li>
            </ul>
          </div>

          {/* Care Plan */}
          <div className="patient-cards care-plan-card">
            <div className="patient-cards-title">Care Plan</div>
            <ul className="patient-cards-des">
              <li>
                Whole Health Exam (include Pap smear & cervical cancer check)
              </li>
              <li>Diabetes screen</li>
              <li>Acupuncture for anxiety</li>
              <li>Eliminate added sugars to reduce symptoms</li>
            </ul>
          </div>

          {/* Physical Health */}
          <div className="patient-cards physical-health-card">
            <div className="patient-cards-title">Physical Health</div>
            <ul className="patient-cards-des">
              <li>Due for a Pap Smear & cervical cancer check</li>
              <li>Recent weight gain</li>
            </ul>
          </div>
        </div>
        <div className="patient-journey-header">
          <h2 className="patient-journey-title">
            <span className="italic">Compassionate care</span> for the fourth
            trimester
          </h2>
          <p id="changing-text" className="patient-description">
            Comprehensive postpartum care that extends beyond the six-week
            checkup, providing long-term support for your physical recovery,
            hormone balance, and mental health through the fourth trimester and
            beyond.
          </p>
        </div>

        <div className="patient-info">
          <div className="patient-name">Maddie, 38</div>
          <div className="element-wrapper">
            <img src={Maddie} alt="Maddie, 38" className="element" />
          </div>
          {/* Mental Health */}
          <div className="patient-cards mental-health-card">
            <div className="patient-cards-title">Mental Health</div>
            <ul className="patient-cards-des">
              <li>Postpartum depression</li>
            </ul>
          </div>

          {/* Care Plan */}
          <div className="patient-cards care-plan-card">
            <div className="patient-cards-title">Care Plan</div>
            <ul className="patient-cards-des">
              <li>Wants to discuss contraception</li>
              <li>Incontinences</li>
              <li>Non-hormonal IUD</li>
              <li>Magnesium & B-vitamin complex</li>
            </ul>
          </div>

          {/* Physical Health */}
          <div className="patient-cards physical-health-card">
            <div className="patient-cards-title">Physical Health</div>
            <ul className="patient-cards-des">
              <li>Pelvic floor therapy</li>
              <li>Postpartum Group</li>
              <li>Non-hormonal IUD</li>
              <li>Magnesium & B-vitamin complex</li>
            </ul>
          </div>
        </div>
        <div className="patient-journey-header">
          <h2 className="patient-journey-title">
            <span className="italic">Tailored care</span> to guide you through
            menopause
          </h2>
          <p id="changing-text" className="patient-description">
            Personalized, holistic care for women experiencing early signs of
            perimenopause, offering expert guidance on symptom management with
            both hormonal and non-hormonal options to help you thrive.
          </p>
        </div>

        <div className="patient-info">
          <div className="patient-name">Cath, 45</div>
          <div className="element-wrapper">
            <img src={Cath} alt="Cath, 45" className="element" />
          </div>
          {/* Mental Health */}
          <div className="patient-cards mental-health-card">
            <div className="patient-cards-title">Mental Health</div>
            <ul className="patient-cards-des">
              <li>Brain fog</li>
            </ul>
          </div>

          {/* Care Plan */}
          <div className="patient-cards care-plan-card">
            <div className="patient-cards-title">Care Plan</div>
            <ul className="patient-cards-des">
              <li>vaginal dryness</li>
              <li>Due for a mammogram</li>
            </ul>
          </div>

          {/* Physical Health */}
          <div className="patient-cards physical-health-card">
            <div className="patient-cards-title">Physical Health</div>
            <ul className="patient-cards-des">
              <li>Hormone Replacement</li>
              <li>Acupunture for perimenopause</li>
              <li>Referral for mammogram </li>
              <li>Microneedling</li>
              <li>Due for a mammogram</li>
            </ul>
          </div>
        </div>
        <div className="svg-container">
          <svg
            width="1194"
            height="2143"
            viewBox="0 0 1194 2143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={underlineRef}
              className="animated-path "
              d="M371.5 0.5C92.5 196.5 -96.8001 518.9 53.9999 618.5C242.5 743 1161 394 1133.5 856C1111.04 1233.32 54.7826 1142.08 84.5 1562C119 2049.5 1093.99 1702.79 1185 1891C1258.5 2043 814.5 2142.5 209 2142.5"
              stroke="#EF308D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
  s;
};

export default UserPersona;
