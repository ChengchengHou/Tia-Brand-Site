/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon12 = ({ color = "#282725", opacity = "unset", className }) => {
  return (
    <svg
      className={`icon-12 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.59 8.295L12 12.875L7.41 8.295L6 9.705L12 15.705L18 9.705L16.59 8.295Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Icon12.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
