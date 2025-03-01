/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Chevronleftfilled83 } from "../../icons/Chevronleftfilled83";
import { Chevronrightfilled147 } from "../../icons/Chevronrightfilled147";
import { Skipnextfilled81 } from "../../icons/Skipnextfilled81";
import { Skippreviousfilled97 } from "../../icons/Skippreviousfilled97";
import { PaginationItem } from "../PaginationItem";
import "./style.css";

export const Pagination = ({
  showLastButton = true,
  showFirstButton = true,
  hidePrevButton = true,
  hideNextButton = true,
  size,
  color,
  variant,
  shape,
  disabled,
  className,
  paginationItemIcon = <Chevronleftfilled83 className="icon-instance-node" />,
  visible = true,
  visible1 = true,
  visible2 = true,
  override = <Chevronrightfilled147 className="icon-instance-node" />,
}) => {
  return (
    <div className={`pagination ${className}`}>
      {showFirstButton && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled
          icon
          override={
            <Skippreviousfilled97
              className={`${size === "medium" && "class"} ${size === "small" && "class-2"} ${size === "large" && "icon-instance-node"}`}
              opacity={
                variant === "outlined" && shape === "circular"
                  ? "0.56"
                  : undefined
              }
            />
          }
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}

      {hidePrevButton && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled
          icon
          override={paginationItemIcon}
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}

      <PaginationItem
        active={!disabled ? true : disabled ? false : undefined}
        className="pagination-item"
        color={
          color === "standard"
            ? "standard"
            : color === "primary"
              ? "primary"
              : color === "secondary"
                ? "secondary"
                : undefined
        }
        disabled={!disabled ? false : disabled ? true : undefined}
        icon={false}
        shape={
          shape === "rounded"
            ? "rounded"
            : shape === "circular"
              ? "circular"
              : undefined
        }
        size={
          size === "medium"
            ? "medium"
            : size === "small"
              ? "small"
              : size === "large"
                ? "large"
                : undefined
        }
        text="1"
        variant={
          variant === "outlined"
            ? "outlined"
            : variant === "text"
              ? "text"
              : undefined
        }
      />
      <PaginationItem
        active={false}
        className="pagination-item"
        color="standard"
        disabled={!disabled ? false : disabled ? true : undefined}
        icon={false}
        labelClassName={`${size === "medium" && "class-3"} ${size === "small" && "class-4"} ${size === "large" && "class-5"}`}
        shape={
          shape === "rounded"
            ? "rounded"
            : shape === "circular"
              ? "circular"
              : undefined
        }
        size={
          size === "medium"
            ? "medium"
            : size === "small"
              ? "small"
              : size === "large"
                ? "large"
                : undefined
        }
        text="2"
        variant={
          variant === "outlined"
            ? "outlined"
            : variant === "text"
              ? "text"
              : undefined
        }
      />
      <PaginationItem
        active={false}
        className="pagination-item"
        color="standard"
        disabled={!disabled ? false : disabled ? true : undefined}
        icon={false}
        labelClassName={`${size === "medium" && "class-3"} ${size === "small" && "class-4"} ${size === "large" && "class-5"}`}
        shape={
          shape === "rounded"
            ? "rounded"
            : shape === "circular"
              ? "circular"
              : undefined
        }
        size={
          size === "medium"
            ? "medium"
            : size === "small"
              ? "small"
              : size === "large"
                ? "large"
                : undefined
        }
        text="3"
        variant={
          variant === "outlined"
            ? "outlined"
            : variant === "text"
              ? "text"
              : undefined
        }
      />
      <PaginationItem
        active={false}
        className="pagination-item"
        color="standard"
        disabled={!disabled ? false : disabled ? true : undefined}
        icon={false}
        labelClassName={`${size === "medium" && "class-3"} ${size === "small" && "class-4"} ${size === "large" && "class-5"}`}
        shape={
          shape === "rounded"
            ? "rounded"
            : shape === "circular"
              ? "circular"
              : undefined
        }
        size={
          size === "medium"
            ? "medium"
            : size === "small"
              ? "small"
              : size === "large"
                ? "large"
                : undefined
        }
        text="4"
        variant={
          variant === "outlined"
            ? "outlined"
            : variant === "text"
              ? "text"
              : undefined
        }
      />

      {visible && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled={!disabled ? false : disabled ? true : undefined}
          icon={false}
          labelClassName={`${size === "medium" && "class-3"} ${size === "small" && "class-4"} ${size === "large" && "class-5"}`}
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          text="5"
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}

      {visible1 && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled={!disabled ? false : disabled ? true : undefined}
          icon={false}
          labelClassName={`${size === "medium" && "class-3"} ${size === "small" && "class-4"} ${size === "large" && "class-5"}`}
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          text="6"
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}

      {visible2 && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled={!disabled ? false : disabled ? true : undefined}
          icon={false}
          labelClassName={`${size === "medium" && "class-3"} ${size === "small" && "class-4"} ${size === "large" && "class-5"}`}
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          text="7"
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}

      {hideNextButton && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled={!disabled ? false : disabled ? true : undefined}
          icon
          override={override}
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}

      {showLastButton && (
        <PaginationItem
          active={false}
          className="pagination-item"
          color="standard"
          disabled={!disabled ? false : disabled ? true : undefined}
          icon
          override={
            <Skipnextfilled81
              className={`${size === "medium" && "class"} ${size === "small" && "class-2"} ${size === "large" && "icon-instance-node"}`}
              opacity={
                variant === "outlined" && shape === "circular"
                  ? "0.56"
                  : undefined
              }
            />
          }
          shape={
            shape === "rounded"
              ? "rounded"
              : shape === "circular"
                ? "circular"
                : undefined
          }
          size={
            size === "medium"
              ? "medium"
              : size === "small"
                ? "small"
                : size === "large"
                  ? "large"
                  : undefined
          }
          variant={
            variant === "outlined"
              ? "outlined"
              : variant === "text"
                ? "text"
                : undefined
          }
        />
      )}
    </div>
  );
};

Pagination.propTypes = {
  showLastButton: PropTypes.bool,
  showFirstButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  hideNextButton: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf(["primary", "secondary", "standard"]),
  variant: PropTypes.oneOf(["text", "outlined"]),
  shape: PropTypes.oneOf(["rounded", "circular"]),
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
};
