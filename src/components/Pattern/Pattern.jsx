/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Pattern = ({
  option,
  version,
  className,
  tiaLinepatternCmykClassName,
}) => {
  return (
    <div className={`pattern ${option} ${version} ${className}`}>
      {((option === "four" && version === "lines") ||
        (option === "one" && version === "lines") ||
        option === "six" ||
        (option === "three" && version === "lines") ||
        (option === "two" && version === "lines") ||
        version === "half-tone") && (
        <img
          className={`tia-linepattern-CMYK ${tiaLinepatternCmykClassName}`}
          alt="Tia linepattern CMYK"
          src={
            version === "lines" && option === "two"
              ? "/img/tia-linepattern-cmyk-lightterracottadarkterracotta-1.png"
              : version === "lines" && option === "three"
                ? "/img/tia-linepattern-cmyk-pistachiocream-1.png"
                : option === "four" && version === "lines"
                  ? "/img/tia-linepattern-cmyk-oatcream-1.png"
                  : option === "six"
                    ? "/img/tia-linepattern-cmyk-raspberrypink-1.png"
                    : option === "one" && version === "half-tone"
                      ? "/img/tia-dot-pattern-template-01-1-1.png"
                      : option === "two" && version === "half-tone"
                        ? "/img/tia-dot-pattern-template-01-2-1.png"
                        : option === "three" && version === "half-tone"
                          ? "/img/tia-dot-pattern-template-01-3-1.png"
                          : option === "four" && version === "half-tone"
                            ? "/img/tia-dot-pattern-template-01-4-1.png"
                            : option === "five"
                              ? "/img/tia-dot-pattern-template-01-5-1.png"
                              : "/img/tia-linepattern-cmyk-lightterracottabrick-1.png"
          }
        />
      )}

      {version === "lines" && option === "five" && (
        <div className={`overlap-group ${tiaLinepatternCmykClassName}`}>
          <img
            className="img"
            alt="Tia linepattern CMYK"
            src="/img/tia-linepattern-cmyk-oatcream-1.png"
          />

          <img
            className="tia-linepattern-CMYK-2"
            alt="Tia linepattern CMYK"
            src="/img/tia-linepattern-cmyk-puttyclay-1.png"
          />
        </div>
      )}
    </div>
  );
};

Pattern.propTypes = {
  option: PropTypes.oneOf(["two", "three", "four", "one", "five", "six"]),
  version: PropTypes.oneOf(["half-tone", "lines"]),
};
