import React from "react";
import { useEffect, useRef } from "react";
import { Logo3 } from "../../icons/Logo3";
import "./style.css";
import { Icon12 } from "../../icons/Icon12";
import { SizeMediumColor } from "../../components/SizeMediumColor";
import { Button } from "../../components/Button";
import gsap from "gsap";

const NavBar = () => {
  const navRef = useRef(null); // Use useRef instead of querySelectorAll

  useEffect(() => {
    gsap.set(navRef.current, { y: -100 }); // Set initial position
    gsap.to(navRef.current, {
      y: 0, // Move to normal position
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "expo.out",
    });
  }, []);

  return (
    <nav ref={navRef} className="nav-bar">
      <div className="logo-wrapper">
        <Logo3 className="logo-3" />
      </div>

      <div className="div-28">
        <div className="nav-items">
          <div className="text-wrapper-16">Service</div>

          <SizeMediumColor
            className="design-component-instance-node"
            iconIcon={<Icon12 className="expandmorefilled-1" color="#282725" />}
          />
        </div>

        <div className="nav-items">
          <div className="text-wrapper-16">Membership</div>

          <SizeMediumColor
            className="design-component-instance-node"
            iconIcon={<Icon12 className="expandmorefilled-1" color="#282725" />}
          />
        </div>

        <div className="text-wrapper-16">Locations</div>
      </div>

      <div className="nav-items">
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
    </nav>
  );
};

export default NavBar;
