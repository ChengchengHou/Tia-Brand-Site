import React from "react";
import { Button } from "../../components/Button";
import { Chip } from "../../components/Chip";
import { Pagination } from "../../components/Pagination";
import { Pattern } from "../../components/Pattern";
import { SizeMediumColor } from "../../components/SizeMediumColor";
import { Chevronleftfilled83 } from "../../icons/Chevronleftfilled83";
import { Chevronrightfilled147 } from "../../icons/Chevronrightfilled147";
import { Icon12 } from "../../icons/Icon12";
import { Logo2 } from "../../icons/Logo2";
import { Logo3 } from "../../icons/Logo3";
import "./style.css";
import MarqueeComponent from "../../components/Marquee/Marquee";

const items = [
  "Primary Care",
  "Gynecology",
  "Mental Health",
  "Acupuncture",
  "Skin Care",
];

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div-2">
        <div className="section-wrapper">
          <div className="section">
            <div className="div-3">
              <div className="div-4">
                <p className="your-health">
                  <span className="span">Your Health, </span>

                  <span className="text-wrapper-2">Personalized</span>
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
          <MarqueeComponent items={items} direction="right" speed={50} />
          <MarqueeComponent items={items} direction="left" speed={40} />
        </div>

        <div className="div-wrapper">
          <div className="div-6">
            <div className="div-7">
              <div className="div-8">
                <p className="text-wrapper-3">
                  EVERYTHING YOU NEED TO DELIVER EXCEPTIONAL CUSTOMER SERVICE
                </p>

                <p className="world-class-women-s">
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

        <div className="section-2">
          <div className="div-9">
            <div className="div-12">
              <div className="text-wrapper-6">Meet our specialist partners</div>

              <p className="text-wrapper-7">
                As a member, your Care Team extends beyond Tia: you’re also
                supported by providers at top-tier health systems—including
                Cedars-Sinai, UCSF Health and CommonSpirit Health—that make it
                easy to get specialty care when you need it.
              </p>
            </div>

            <div className="image-wrapper-2">
              <img className="image-3" alt="Image" src="/img/image-5-1.png" />
            </div>
          </div>

          <div className="div-13">
            <div className="div-14">
              <div className="div-15">
                <img className="image-4" alt="Image" src="/img/image-7-1.png" />

                <img className="image-5" alt="Image" src="/img/image-6-1.png" />

                <img className="image-5" alt="Image" src="/img/image-9-1.png" />

                <img
                  className="image-6"
                  alt="Image"
                  src="/img/image-12-1.png"
                />

                <img
                  className="image-7"
                  alt="Image"
                  src="/img/image-16-1.png"
                />

                <img
                  className="image-8"
                  alt="Image"
                  src="/img/image-15-1.png"
                />
              </div>

              <div className="div-16">
                <img
                  className="image-9"
                  alt="Image"
                  src="/img/image-13-1.png"
                />

                <img
                  className="image-10"
                  alt="Image"
                  src="/img/image-14-1.png"
                />

                <img
                  className="image-11"
                  alt="Image"
                  src="/img/image-18-1.png"
                />

                <img
                  className="image-11"
                  alt="Image"
                  src="/img/image-17-1.png"
                />

                <img
                  className="image-12"
                  alt="Image"
                  src="/img/image-19-1.png"
                />
              </div>
            </div>

            <div className="div-12">
              <div className="text-wrapper-6">Yes, we take insurance</div>

              <p className="text-wrapper-7">
                As a member, your Care Team extends beyond Tia: you’re also
                supported by providers at top-tier health systems—including
                Cedars-Sinai, UCSF Health and CommonSpirit Health—that make it
                easy to get specialty care when you need it.
              </p>
            </div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="div-7">
            <div className="div-8">
              <div className="text-wrapper-3">TESTIMONIALS</div>

              <p className="text-wrapper-8">Why our members love Tia</p>
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

        <div className="div-21">
          <Pattern
            className="pattern-3"
            option="two"
            tiaLinepatternCmykClassName="pattern-4"
            version="half-tone"
          />
          <div className="div-22">
            <p className="still-have-questions">
              Still have questions about Tia?
              <br />
              Call us at 1-646-650-5337
            </p>

            <div className="div-23">
              <Button
                className="design-component-instance-node"
                color="primary"
                label="Join Tia"
                size="large"
                stateProp="enabled"
                variant="contained"
              />
              <Button
                className="design-component-instance-node"
                color="inherit-white"
                label="Learn about our service"
                size="large"
                stateProp="enabled"
                variant="outlined"
              />
            </div>
          </div>
        </div>

        <div className="section-4">
          <div className="div-24">
            <Logo2 className="logo" />
            <div className="text-wrapper-12">Your Health, Personalized</div>
          </div>

          <div className="div-25">
            <p className="contact-asktia-tia">
              <span className="text-wrapper-13">
                Contact
                <br />
              </span>

              <span className="text-wrapper-14">
                asktia@tia.com
                <br />
              </span>

              <a
                href="tel:+38589239090"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-14">1</span>
              </a>

              <span className="text-wrapper-14">23 456 7890</span>
            </p>

            <div className="div-26">
              Company
              <br />
              Team
              <br />
              DEI
              <br />
              Careers
              <br />
              Community
              <br />
              Press
              <br />
              FAQ
              <br />
              Contact
              <br />
              BLOG
            </div>

            <p className="div-26">
              <a
                href="https://assets.asktia.com/pdfs/tia-privacy-policy.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-15">
                  NPP
                  <br />
                </span>
              </a>

              <a
                href="https://asktia.com/membership-terms-of-use"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-15">
                  Membership Terms
                  <br />
                </span>
              </a>

              <a
                href="https://asktia.com/website-terms-of-use"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-15">
                  Website Terms
                  <br />
                </span>
              </a>

              <a
                href="https://asktia.com/privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-15">Privacy Policy</span>
              </a>

              <a
                href="https://asktia.com/credits"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-wrapper-15">Credits</span>
              </a>
            </p>

            <div className="div-26">
              Twitter
              <br />
              Instagram
              <br />
              Titkok
            </div>
          </div>

          <div className="div-27">
            <div className="text-wrapper-9">© Tia 2025</div>
          </div>
        </div>
      </div>

      {/* <div className="left-side">
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
            label="Join Tia"
            size="large"
            stateProp="enabled"
            variant="contained"
          />
          <Button
            className="design-component-instance-node"
            color="primary"
            label="Log In"
            size="large"
            stateProp="enabled"
            variant="text"
          />
        </div>
      </div> */}
    </div>
  );
};
