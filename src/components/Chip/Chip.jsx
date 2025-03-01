/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Chip = ({
  label = "Chip",
  delete1 = false,
  thumbnail = false,
  size,
  color,
  state,
  variant,
  className,
}) => {
  return (
    <div
      className={`chip state-0-${state} variant-1-${variant} color-0-${color} ${className}`}
    >
      <div className="typography">
        <div className="div">{label}</div>
      </div>
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string,
  delete1: PropTypes.bool,
  thumbnail: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
  color: PropTypes.oneOf([
    "warning",
    "info",
    "default",
    "success",
    "secondary",
    "primary",
    "error",
  ]),
  state: PropTypes.oneOf(["enabled", "pressed", "focused", "disabled"]),
  variant: PropTypes.oneOf(["outlined", "filled"]),
};
