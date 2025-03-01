/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Chevronrightfilled147 } from "../../icons/Chevronrightfilled147";
import "./style.css";

export const PaginationItem = ({
  active,
  icon,
  size,
  variant,
  shape,
  color,
  disabled,
  className,
  override = <Chevronrightfilled147 className="chevron-right-filled" />,
  labelClassName,
  text = "1",
}) => {
  return (
    <div className={`pagination-item size-1-${size} ${className}`}>
      <div
        className={`button-base variant-2-${variant} size-2-${size} disabled-${disabled} ${shape} icon-${icon} color-1-${color} active-${active}`}
      >
        {!icon && <div className={`label ${labelClassName}`}>{text}</div>}

        {icon && <>{override}</>}
      </div>
    </div>
  );
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  variant: PropTypes.oneOf(["text", "outlined"]),
  shape: PropTypes.oneOf(["rounded", "circular"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  disabled: PropTypes.bool,
  text: PropTypes.string,
};
