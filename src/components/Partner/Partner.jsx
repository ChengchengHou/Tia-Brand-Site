import React from "react";
import Partners from "/img/Partner.png";
import "./style.css";

export const Partner = () => {
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
          <div className="div-2">
            <div className="text-wrapper-2">Cidars Sinai</div>

            <p className="text-wrapper-3">
              Renowned for advanced medical research and innovative treatments,
              Cedars-Sinai provides specialized care in cardiology, oncology,
              and women&#39;s health.
            </p>
          </div>

          <div className="div-2">
            <div className="text-wrapper-2">UCSF</div>

            <p className="text-wrapper-3">
              As a leader in academic medicine, UCSF Health brings expertise in
              complex diagnoses, pioneering treatments, and cutting-edge
              research.
            </p>
          </div>

          <div className="div-2">
            <div className="text-wrapper-2">Dignity Health</div>

            <p className="text-wrapper-3">
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
