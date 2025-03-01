/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon8 } from "../../icons/Icon8";
import "./style.css";

export const Icon = ({
  size,
  type,
  className,
  icon = <Icon8 className="icon-8" />,
}) => {
  return (
    <div className={`icon size-4-${size} ${className}`}>
      {type === "SVG-icon" && <>{icon}</>}

      {type === "font-icon" && <div className="material-icons">house</div>}
    </div>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(["large", "inherit", "medium", "small"]),
  type: PropTypes.oneOf(["SVG-icon", "font-icon"]),
};
