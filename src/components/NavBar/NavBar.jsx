import React from "react";
import "./NavBar.css"; // Ensure you create this CSS file
import Logo3 from "./Logo3"; // Import your Logo component
import SizeMediumColor from "./SizeMediumColor"; // Import dropdown component
import Icon12 from "./Icon12"; // Import the icon component
import Button from "./Button"; // Import your Button component

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="logo-wrapper">
        <Logo3 className="logo-3" />
      </div>

      <div className="NavBar-links">
        <div className="NavBar-item">
          <div className="text-wrapper">Service</div>
          <SizeMediumColor
            className="design-component-instance-node"
            iconIcon={<Icon12 className="expandmorefilled-1" color="#282725" />}
          />
        </div>

        <div className="NavBar-item">
          <div className="text-wrapper">Membership</div>
          <SizeMediumColor
            className="design-component-instance-node"
            iconIcon={<Icon12 className="expandmorefilled-1" color="#282725" />}
          />
        </div>

        <div className="text-wrapper">Locations</div>
      </div>

      <div className="NavBar-buttons">
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
    </nav>
  );
};

export default NavBar;
