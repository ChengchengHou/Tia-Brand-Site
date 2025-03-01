/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon12 } from "../../icons/Icon12";
import { Icon } from "../Icon";
import "./style.css";

export const SizeMediumColor = ({
  className,
  iconIcon = <Icon12 className="icon-12" color="white" />,
}) => {
  return (
    <div className={`size-medium-color ${className}`}>
      <Icon
        className="icon-instance"
        icon={iconIcon}
        size="medium"
        type="SVG-icon"
      />
    </div>
  );
};
