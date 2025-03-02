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
import Footer from "../../components/Footer/Footer";
import Partner from "../../components/Partner/Partner";
import SplitType from "split-type";
import Insurance from "../../components/Insurance/Insurance";

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
      <div className="nav-bar">
        <div className="logo-wrapper">
          <Logo3 className="logo-3" />
        </div>

        <div className="div-28">
          <div className="div-23">
            <div className="text-wrapper-16">Service</div>

            <SizeMediumColor
              className="design-component-instance-node"
              iconIcon={
                <Icon12 className="expandmorefilled-1" color="#282725" />
              }
            />
          </div>

          <div className="div-23">
            <div className="text-wrapper-16">Membership</div>

            <SizeMediumColor
              className="design-component-instance-node"
              iconIcon={
                <Icon12 className="expandmorefilled-1" color="#282725" />
              }
            />
          </div>

          <div className="text-wrapper-16">Locations</div>
        </div>

        <div className="div-23">
          <Button
            className="design-component-instance-node"
            color="primary"
            label="Log In"
            size="large"
            stateProp="enabled"
            variant="text"
          />
          <Button
            className="design-component-instance-node"
            color="primary"
            label="Join Tia"
            size="large"
            stateProp="enabled"
            variant="contained"
          />
        </div>
      </div>
      <div className="div-2">
        <div className="section-wrapper">
          <div className="hero">
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
                  World-class women’s health experts <br />
                  Meet a few of our trusted providers who specialize in women’s
                  healthcare.
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
                  </div>

                  <p className="text-wrapper-5">
                    Dr. Moritz is a board-certified OB/GYN with 30+ years of
                    practice in New York City. He was the Director of Gynecology
                    at Mount Sinai West for 25 years and is a renowned advocate
                    for patient choice in childbirth. A testament to Dr.
                    Moritz’s commitment to patient-centered women’s care, he
                    created the only two operating in-hospital birthing centers
                    in Manhattan. He lectures on new technologies in
                    gynecological procedures, authored chapters on uterine
                    fibroids, and has been listed in New York Magazine’s “Top
                    Doctors” for the past five years.
                  </p>

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

        <div className="div-wrapper">
          <div className="div-7">
            <div className="div-8">
              <div className="text-wrapper-3">TESTIMONIALS</div>

              <p className="text-wrapper-8 animated-text">
                Why our members love Tia
              </p>
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

        <div className="section-3">
          <div className="div-9">
            <img className="image-14" alt="Image" src="/img/image-22-1.png" />

            <div className="div-20">
              <p className="text-wrapper-6">
                Comprehensive care for complex symptoms
              </p>

              <p className="text-wrapper-7">
                Comprehensive mental, physical, and emotional care for chronic
                health issues such as diabetes, obesity, mental health
                conditions, autoimmune disorders, endometriosis, and PCOS, with
                personalized solutions that truly work.
                <br />
                Essential screenings that matter, including Pap smears, breast
                exams, pelvic assessments, cardio-metabolic tests, hormonal
                evaluations, and immunoglobulin tests, to help you stay
                proactive about your health.
                <br />
                Access to top specialists through leading institutions like UCSF
                and Cedars-Sinai, ensuring you receive the expert guidance
                needed to manage complex symptoms effectively.
              </p>
            </div>
          </div>

          <div className="div-9">
            <div className="div-20">
              <p className="text-wrapper-6">
                Compassionate care for the fourth trimester
              </p>

              <p className="text-wrapper-7">
                Postpartum care for you that goes beyond a typical
                <br />
                six-week checkup, supporting your physical and emotional
                recovery.
                <br />
                We help you navigate the challenges of new motherhood with
                long-term, compassionate care.
                <br />
                From hormone management to mental health, our care supports your
                fourth trimester and beyond.
              </p>
            </div>

            <img className="image-15" alt="Image" src="/img/image-23-1.png" />
          </div>

          <div className="div-9">
            <img className="image-16" alt="Image" src="/img/image-24-1.png" />

            <div className="div-20">
              <p className="text-wrapper-6">
                Tailored care to guide you through menopause
              </p>

              <p className="text-wrapper-7">
                Personalized care for women navigating early signs of
                perimenopause.
                <br />
                Expert guidance on symptom management with both hormonal and
                non-hormonal options.
                <br />
                Holistic care plans tailored to your unique body and mind,
                helping you thrive through perimenopause.
              </p>
            </div>
          </div>
        </div>
        <Insurance />
        <Footer />
      </div>
    </div>
  );
};
