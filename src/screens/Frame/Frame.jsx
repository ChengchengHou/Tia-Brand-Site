import React from "react";
import { useEffect, useRef } from "react";
import { Button } from "../../components/Button";
import { Chip } from "../../components/Chip";
import { Pagination } from "../../components/Pagination";
import { Pattern } from "../../components/Pattern";
import { SizeMediumColor } from "../../components/SizeMediumColor";
import { Chevronleftfilled83 } from "../../icons/Chevronleftfilled83";
import { Chevronrightfilled147 } from "../../icons/Chevronrightfilled147";
import { Icon12 } from "../../icons/Icon12";
import { Logo3 } from "../../icons/Logo3";
import "./style.css";
import MarqueeComponent from "../../components/Marquee/Marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Partner from "../../components/Partner/Partner";
import SplitType from "split-type";
import Insurance from "../../components/Insurance/Insurance";
import UserPersona from "../../components/UserPersona/UserPersona";
import GradientBackground from "../../components/GradientBackground/GradientBackground";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const items = [
  "Primary Care",
  "Gynecology",
  "Mental Health",
  "Acupuncture",
  "Skin Care",
];

const phrases = [
  "Your Health, Simplified.",
  "Your Health, Empowered.",
  "Your Health, Reimagined.",
  "Your Health, Seamless.",
  "Your Health, Connected.",
  "Your Health, Elevated.",
  "Your Health, Streamlined.",
  "Your Health, In Sync.",
  "Your Health, Made Easy.",
  "Your Health, Your Way.",
];

export const Frame = () => {
  // GSAP User Ref
  const yourHealthRef = useRef(null);
  const underlineRef = useRef(null);

  //GSAP Line Animation
  useEffect(() => {
    if (underlineRef.current) {
      const pathLength = underlineRef.current.getTotalLength();

      console.log("Path Length:", pathLength); // Debugging step

      gsap.set(underlineRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(underlineRef.current, {
        strokeDashoffset: 0, // Draw the line
        duration: 3,
        delay: 1,
        repeat: -1,
        ease: "power2.Out",
        yoyo: true,
      });
    }
  }, []);

  // GSAP Text Animation
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, delay: 1 });
    phrases.forEach((phrase) => {
      tl.to(yourHealthRef.current, {
        duration: 2,
        text: `Your Health,<br />${phrase.split("Your Health, ")[1]}`,
        ease: "power1.Out",
        delay: 1,
      });
    });
  }, []);

  // GSAP Scroll Effect for Text Appearance

  useEffect(() => {
    const elements = document.querySelectorAll(".animated-text");

    elements.forEach((element) => {
      const text = new SplitType(element, { types: "chars" });

      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: 5,
          filter: "blur(4px)",
        },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 40%",
            toggleActions: "play none none none",
            scrub: false,
          },
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.015,
          duration: 0.35,
        }
      );

      // Cleanup on unmount
      return () => text.revert();
    });
  }, []);

  return (
    <div className="frame">
      <NavBar />
      <div className="div-2">
        <div className="section-wrapper">
          <div className="hero">
            <GradientBackground />
            <div className="div-3">
              <div className="div-4">
                <p ref={yourHealthRef} className="your-health">
                  Your Health, Personalized
                </p>

                <p className="p">
                  No one-size-fits-all prescriptions here. At Tia, we take a
                  whole-health approach, personalizing your care to fit you—your
                  body, your needs, your life.
                </p>

                <div className="div-5">
                  <Button
                    className="design-component-instance-node"
                    color="primary"
                    label="See if’you’re in network"
                    size="large"
                    stateProp="enabled"
                    variant="contained"
                  />
                  <Button
                    className="design-component-instance-node"
                    color="primary"
                    label="Learn about membership"
                    size="large"
                    stateProp="enabled"
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="image-wrapper">
                <img className="image" alt="Image" src="/img/image-3-1.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="marquee-wrapper">
          <MarqueeComponent items={items} direction="right" speed={40} />
          <MarqueeComponent items={items} direction="left" speed={35} />
        </div>

        <div className="div-wrapper">
          <div className="div-6">
            <div className="div-7">
              <div className="div-8">
                <p className="text-wrapper-3">
                  EVERYTHING YOU NEED TO DELIVER EXCEPTIONAL CUSTOMER SERVICE
                </p>

                <p className="world-class-women-s animated-text">
                  World-class women’s health experts: <br />
                  Meet a few of our trusted providers who <br />
                  specialize in women’s healthcare.
                </p>
              </div>

              <div className="div-9">
                <div className="img-wrapper">
                  <img
                    className="image-2"
                    alt="Image"
                    src="/img/image-21-1.png"
                  />
                </div>

                <div className="div-10">
                  <div className="div-11">
                    <div className="text-wrapper-4">Jacques Moritz, MD</div>

                    <Chip
                      className="design-component-instance-node"
                      color="default"
                      label="In-person only"
                      size="medium"
                      state="enabled"
                      variant="filled"
                    />
                    <p className="text-wrapper-5">
                      Dr. Moritz is a board-certified OB/GYN with 30+ years of
                      practice in New York City. He was the Director of
                      Gynecology at Mount Sinai West for 25 years and is a
                      renowned advocate for patient choice in childbirth. A
                      testament to Dr. Moritz’s commitment to patient-centered
                      women’s care, he created the only two operating
                      in-hospital birthing centers in Manhattan. He lectures on
                      new technologies in gynecological procedures, authored
                      chapters on uterine fibroids, and has been listed in New
                      York Magazine’s “Top Doctors” for the past five years.
                    </p>
                  </div>

                  <Button
                    className="design-component-instance-node"
                    color="primary"
                    label="Make an appointment"
                    size="large"
                    stateProp="enabled"
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="pagination-wrapper">
                <Pagination
                  className="design-component-instance-node"
                  color="standard"
                  disabled={false}
                  override={
                    <Chevronrightfilled147 className="icon-instance-node-2" />
                  }
                  paginationItemIcon={
                    <Chevronleftfilled83 className="icon-instance-node-2" />
                  }
                  shape="rounded"
                  showFirstButton={false}
                  showLastButton={false}
                  size="large"
                  variant="outlined"
                  visible={false}
                  visible1={false}
                  visible2={false}
                />
              </div>
            </div>
          </div>
        </div>
        <Partner />
        <Insurance />

        <div className="div-wrapper">
          <div className="div-7">
            <div className="div-8">
              <div className="text-wrapper-3">TESTIMONIALS</div>
              <div class="testimonial-header">
                <p className="text-wrapper-8 animated-text">
                  Why our members love Tia
                </p>
                <div className="underline-container ">
                  <svg
                    className="animated-underline"
                    width="28"
                    height="45"
                    viewBox="0 0 28 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.56377 43.3833C0.397101 29.7167 0.263767 2.18334 9.06377 1.38334C20.0638 0.383338 12.0637 28.3833 10.5637 23.8833C9.06377 19.3833 14.0637 -2.1166 23.0637 1.38334C32.0637 4.88327 19.5637 28.3833 11.5637 35.3833"
                      stroke="#282725"
                      stroke-width="2"
                      stroke-linecap="round"
                      ref={underlineRef}
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="div-9">
              <div className="div-17">
                <div className="div-18">
                  <div className="text-wrapper-9">Tess</div>

                  <div className="text-wrapper-10">New York City</div>
                </div>

                <div className="div-19">
                  <div className="text-wrapper-9">Laura</div>

                  <div className="text-wrapper-10">Phoenix</div>
                </div>

                <div className="div-19">
                  <div className="text-wrapper-9">Sarah</div>

                  <div className="text-wrapper-10">Arizona</div>
                </div>

                <div className="div-19">
                  <div className="text-wrapper-9">Leslie</div>

                  <div className="text-wrapper-10">San Francisco</div>
                </div>
              </div>

              <div className="img-wrapper">
                <img
                  className="image-13"
                  alt="Image"
                  src="/img/image-20-1.png"
                />
              </div>

              <div className="div-10">
                <div className="text-wrapper-11">“Friendly Atmosphere”</div>

                <p className="from-the-moment-i">
                  From the moment I walk in, I am greeted by friendly and
                  professional staff who make me feel welcome and cared for. The
                  healthcare team takes the time to listen to my concerns &amp;
                  provides comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
        <UserPersona />
        <Footer />
      </div>
    </div>
  );
};
