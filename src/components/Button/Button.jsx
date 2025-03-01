/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Button = ({
  label = "Label",
  endIcon = false,
  startIcon = false,
  size,
  color,
  stateProp,
  variant,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "large",

    color: color || "primary",

    state: stateProp || "enabled",

    variant: variant || "contained",
  });

  return (
    <button
      className={`button ${state.variant} ${state.state} ${state.size} ${state.color} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["focused", "pressed"].includes(state.state) && (
        <img
          className="focus-ripple"
          alt="Focus ripple"
          src={
            state.state === "pressed" &&
            state.variant === "contained" &&
            state.color === "primary" &&
            state.size === "large"
              ? "/img/focusripple-145.svg"
              : state.color === "inherit" &&
                  state.variant === "contained" &&
                  state.state === "focused" &&
                  state.size === "large"
                ? "/img/focusripple-146.svg"
                : state.color === "inherit" &&
                    state.state === "pressed" &&
                    state.variant === "contained" &&
                    state.size === "large"
                  ? "/img/focusripple-147.svg"
                  : state.color === "inherit-white" &&
                      state.variant === "contained" &&
                      state.state === "focused" &&
                      state.size === "large"
                    ? "/img/focusripple-148.svg"
                    : state.color === "inherit-white" &&
                        state.variant === "contained" &&
                        state.state === "pressed" &&
                        state.size === "large"
                      ? "/img/focusripple-149.svg"
                      : state.variant === "contained" &&
                          state.state === "focused" &&
                          state.color === "secondary" &&
                          state.size === "large"
                        ? "/img/focusripple-150.svg"
                        : state.state === "pressed" &&
                            state.variant === "contained" &&
                            state.color === "secondary" &&
                            state.size === "large"
                          ? "/img/focusripple-151.svg"
                          : state.state === "focused" &&
                              state.variant === "contained" &&
                              state.color === "error" &&
                              state.size === "large"
                            ? "/img/focusripple-152.svg"
                            : state.state === "pressed" &&
                                state.variant === "contained" &&
                                state.color === "error" &&
                                state.size === "large"
                              ? "/img/focusripple-153.svg"
                              : state.color === "warning" &&
                                  state.variant === "contained" &&
                                  state.state === "focused" &&
                                  state.size === "large"
                                ? "/img/focusripple-154.svg"
                                : state.color === "warning" &&
                                    state.variant === "contained" &&
                                    state.state === "pressed" &&
                                    state.size === "large"
                                  ? "/img/focusripple-155.svg"
                                  : state.color === "info" &&
                                      state.variant === "contained" &&
                                      state.state === "focused" &&
                                      state.size === "large"
                                    ? "/img/focusripple-156.svg"
                                    : state.state === "pressed" &&
                                        state.color === "info" &&
                                        state.variant === "contained" &&
                                        state.size === "large"
                                      ? "/img/focusripple-157.svg"
                                      : state.state === "focused" &&
                                          state.variant === "contained" &&
                                          state.color === "success" &&
                                          state.size === "large"
                                        ? "/img/focusripple-158.svg"
                                        : state.state === "pressed" &&
                                            state.variant === "contained" &&
                                            state.color === "success" &&
                                            state.size === "large"
                                          ? "/img/focusripple-159.svg"
                                          : state.color === "primary" &&
                                              state.variant === "contained" &&
                                              state.size === "medium" &&
                                              state.state === "focused"
                                            ? "/img/focusripple-160.svg"
                                            : state.color === "primary" &&
                                                state.variant === "contained" &&
                                                state.size === "medium" &&
                                                state.state === "pressed"
                                              ? "/img/focusripple-161.svg"
                                              : state.color === "inherit" &&
                                                  state.variant ===
                                                    "contained" &&
                                                  state.size === "medium" &&
                                                  state.state === "focused"
                                                ? "/img/focusripple-162.svg"
                                                : state.color === "inherit" &&
                                                    state.variant ===
                                                      "contained" &&
                                                    state.size === "medium" &&
                                                    state.state === "pressed"
                                                  ? "/img/focusripple-163.svg"
                                                  : state.color ===
                                                        "inherit-white" &&
                                                      state.variant ===
                                                        "contained" &&
                                                      state.size === "medium" &&
                                                      state.state === "focused"
                                                    ? "/img/focusripple-164.svg"
                                                    : state.color ===
                                                          "inherit-white" &&
                                                        state.variant ===
                                                          "contained" &&
                                                        state.size ===
                                                          "medium" &&
                                                        state.state ===
                                                          "pressed"
                                                      ? "/img/focusripple-165.svg"
                                                      : state.color ===
                                                            "secondary" &&
                                                          state.variant ===
                                                            "contained" &&
                                                          state.size ===
                                                            "medium" &&
                                                          state.state ===
                                                            "focused"
                                                        ? "/img/focusripple-166.svg"
                                                        : state.color ===
                                                              "secondary" &&
                                                            state.variant ===
                                                              "contained" &&
                                                            state.size ===
                                                              "medium" &&
                                                            state.state ===
                                                              "pressed"
                                                          ? "/img/focusripple-167.svg"
                                                          : state.variant ===
                                                                "contained" &&
                                                              state.color ===
                                                                "error" &&
                                                              state.size ===
                                                                "medium" &&
                                                              state.state ===
                                                                "focused"
                                                            ? "/img/focusripple-168.svg"
                                                            : state.variant ===
                                                                  "contained" &&
                                                                state.color ===
                                                                  "error" &&
                                                                state.size ===
                                                                  "medium" &&
                                                                state.state ===
                                                                  "pressed"
                                                              ? "/img/focusripple-169.svg"
                                                              : state.color ===
                                                                    "warning" &&
                                                                  state.variant ===
                                                                    "contained" &&
                                                                  state.size ===
                                                                    "medium" &&
                                                                  state.state ===
                                                                    "focused"
                                                                ? "/img/focusripple-170.svg"
                                                                : state.color ===
                                                                      "warning" &&
                                                                    state.variant ===
                                                                      "contained" &&
                                                                    state.size ===
                                                                      "medium" &&
                                                                    state.state ===
                                                                      "pressed"
                                                                  ? "/img/focusripple-171.svg"
                                                                  : state.color ===
                                                                        "info" &&
                                                                      state.variant ===
                                                                        "contained" &&
                                                                      state.size ===
                                                                        "medium" &&
                                                                      state.state ===
                                                                        "focused"
                                                                    ? "/img/focusripple-172.svg"
                                                                    : state.color ===
                                                                          "info" &&
                                                                        state.variant ===
                                                                          "contained" &&
                                                                        state.size ===
                                                                          "medium" &&
                                                                        state.state ===
                                                                          "pressed"
                                                                      ? "/img/focusripple-173.svg"
                                                                      : state.variant ===
                                                                            "contained" &&
                                                                          state.color ===
                                                                            "success" &&
                                                                          state.size ===
                                                                            "medium" &&
                                                                          state.state ===
                                                                            "focused"
                                                                        ? "/img/focusripple-174.svg"
                                                                        : state.variant ===
                                                                              "contained" &&
                                                                            state.color ===
                                                                              "success" &&
                                                                            state.size ===
                                                                              "medium" &&
                                                                            state.state ===
                                                                              "pressed"
                                                                          ? "/img/focusripple-175.svg"
                                                                          : state.variant ===
                                                                                "contained" &&
                                                                              state.size ===
                                                                                "small" &&
                                                                              state.color ===
                                                                                "primary" &&
                                                                              state.state ===
                                                                                "focused"
                                                                            ? "/img/focusripple-176.svg"
                                                                            : state.variant ===
                                                                                  "contained" &&
                                                                                state.size ===
                                                                                  "small" &&
                                                                                state.color ===
                                                                                  "primary" &&
                                                                                state.state ===
                                                                                  "pressed"
                                                                              ? "/img/focusripple-177.svg"
                                                                              : state.color ===
                                                                                    "inherit" &&
                                                                                  state.variant ===
                                                                                    "contained" &&
                                                                                  state.size ===
                                                                                    "small" &&
                                                                                  state.state ===
                                                                                    "focused"
                                                                                ? "/img/focusripple-178.svg"
                                                                                : state.color ===
                                                                                      "inherit" &&
                                                                                    state.variant ===
                                                                                      "contained" &&
                                                                                    state.size ===
                                                                                      "small" &&
                                                                                    state.state ===
                                                                                      "pressed"
                                                                                  ? "/img/focusripple-179.svg"
                                                                                  : state.color ===
                                                                                        "inherit-white" &&
                                                                                      state.variant ===
                                                                                        "contained" &&
                                                                                      state.size ===
                                                                                        "small" &&
                                                                                      state.state ===
                                                                                        "focused"
                                                                                    ? "/img/focusripple-180.svg"
                                                                                    : state.color ===
                                                                                          "inherit-white" &&
                                                                                        state.variant ===
                                                                                          "contained" &&
                                                                                        state.size ===
                                                                                          "small" &&
                                                                                        state.state ===
                                                                                          "pressed"
                                                                                      ? "/img/focusripple-181.svg"
                                                                                      : state.variant ===
                                                                                            "contained" &&
                                                                                          state.size ===
                                                                                            "small" &&
                                                                                          state.color ===
                                                                                            "secondary" &&
                                                                                          state.state ===
                                                                                            "focused"
                                                                                        ? "/img/focusripple-182.svg"
                                                                                        : state.variant ===
                                                                                              "contained" &&
                                                                                            state.size ===
                                                                                              "small" &&
                                                                                            state.color ===
                                                                                              "secondary" &&
                                                                                            state.state ===
                                                                                              "pressed"
                                                                                          ? "/img/focusripple-183.svg"
                                                                                          : state.variant ===
                                                                                                "contained" &&
                                                                                              state.size ===
                                                                                                "small" &&
                                                                                              state.color ===
                                                                                                "error" &&
                                                                                              state.state ===
                                                                                                "focused"
                                                                                            ? "/img/focusripple-184.svg"
                                                                                            : state.variant ===
                                                                                                  "contained" &&
                                                                                                state.size ===
                                                                                                  "small" &&
                                                                                                state.color ===
                                                                                                  "error" &&
                                                                                                state.state ===
                                                                                                  "pressed"
                                                                                              ? "/img/focusripple-185.svg"
                                                                                              : state.color ===
                                                                                                    "warning" &&
                                                                                                  state.variant ===
                                                                                                    "contained" &&
                                                                                                  state.size ===
                                                                                                    "small" &&
                                                                                                  state.state ===
                                                                                                    "focused"
                                                                                                ? "/img/focusripple-186.svg"
                                                                                                : state.color ===
                                                                                                      "warning" &&
                                                                                                    state.variant ===
                                                                                                      "contained" &&
                                                                                                    state.size ===
                                                                                                      "small" &&
                                                                                                    state.state ===
                                                                                                      "pressed"
                                                                                                  ? "/img/focusripple-187.svg"
                                                                                                  : state.color ===
                                                                                                        "info" &&
                                                                                                      state.size ===
                                                                                                        "small" &&
                                                                                                      state.variant ===
                                                                                                        "contained" &&
                                                                                                      state.state ===
                                                                                                        "focused"
                                                                                                    ? "/img/focusripple-188.svg"
                                                                                                    : state.color ===
                                                                                                          "info" &&
                                                                                                        state.size ===
                                                                                                          "small" &&
                                                                                                        state.variant ===
                                                                                                          "contained" &&
                                                                                                        state.state ===
                                                                                                          "pressed"
                                                                                                      ? "/img/focusripple-189.svg"
                                                                                                      : state.variant ===
                                                                                                            "contained" &&
                                                                                                          state.size ===
                                                                                                            "small" &&
                                                                                                          state.color ===
                                                                                                            "success" &&
                                                                                                          state.state ===
                                                                                                            "focused"
                                                                                                        ? "/img/focusripple-190.svg"
                                                                                                        : state.variant ===
                                                                                                              "contained" &&
                                                                                                            state.size ===
                                                                                                              "small" &&
                                                                                                            state.color ===
                                                                                                              "success" &&
                                                                                                            state.state ===
                                                                                                              "pressed"
                                                                                                          ? "/img/focusripple-191.svg"
                                                                                                          : state.variant ===
                                                                                                                "outlined" &&
                                                                                                              state.state ===
                                                                                                                "focused" &&
                                                                                                              state.color ===
                                                                                                                "primary" &&
                                                                                                              state.size ===
                                                                                                                "large"
                                                                                                            ? "/img/focusripple-192.svg"
                                                                                                            : state.state ===
                                                                                                                  "pressed" &&
                                                                                                                state.variant ===
                                                                                                                  "outlined" &&
                                                                                                                state.color ===
                                                                                                                  "primary" &&
                                                                                                                state.size ===
                                                                                                                  "large"
                                                                                                              ? "/img/focusripple-193.svg"
                                                                                                              : state.color ===
                                                                                                                    "inherit" &&
                                                                                                                  state.variant ===
                                                                                                                    "outlined" &&
                                                                                                                  state.state ===
                                                                                                                    "focused" &&
                                                                                                                  state.size ===
                                                                                                                    "large"
                                                                                                                ? "/img/focusripple-194.svg"
                                                                                                                : state.color ===
                                                                                                                      "inherit" &&
                                                                                                                    state.state ===
                                                                                                                      "pressed" &&
                                                                                                                    state.variant ===
                                                                                                                      "outlined" &&
                                                                                                                    state.size ===
                                                                                                                      "large"
                                                                                                                  ? "/img/focusripple-195.svg"
                                                                                                                  : state.color ===
                                                                                                                        "inherit-white" &&
                                                                                                                      state.variant ===
                                                                                                                        "outlined" &&
                                                                                                                      state.state ===
                                                                                                                        "focused" &&
                                                                                                                      state.size ===
                                                                                                                        "large"
                                                                                                                    ? "/img/focusripple-196.svg"
                                                                                                                    : state.color ===
                                                                                                                          "inherit-white" &&
                                                                                                                        state.variant ===
                                                                                                                          "outlined" &&
                                                                                                                        state.state ===
                                                                                                                          "pressed" &&
                                                                                                                        state.size ===
                                                                                                                          "large"
                                                                                                                      ? "/img/focusripple-197.svg"
                                                                                                                      : state.variant ===
                                                                                                                            "outlined" &&
                                                                                                                          state.state ===
                                                                                                                            "focused" &&
                                                                                                                          state.color ===
                                                                                                                            "secondary" &&
                                                                                                                          state.size ===
                                                                                                                            "large"
                                                                                                                        ? "/img/focusripple-198.svg"
                                                                                                                        : state.state ===
                                                                                                                              "pressed" &&
                                                                                                                            state.variant ===
                                                                                                                              "outlined" &&
                                                                                                                            state.color ===
                                                                                                                              "secondary" &&
                                                                                                                            state.size ===
                                                                                                                              "large"
                                                                                                                          ? "/img/focusripple-199.svg"
                                                                                                                          : state.variant ===
                                                                                                                                "outlined" &&
                                                                                                                              state.state ===
                                                                                                                                "focused" &&
                                                                                                                              state.color ===
                                                                                                                                "error" &&
                                                                                                                              state.size ===
                                                                                                                                "large"
                                                                                                                            ? "/img/focusripple-200.svg"
                                                                                                                            : state.state ===
                                                                                                                                  "pressed" &&
                                                                                                                                state.variant ===
                                                                                                                                  "outlined" &&
                                                                                                                                state.color ===
                                                                                                                                  "error" &&
                                                                                                                                state.size ===
                                                                                                                                  "large"
                                                                                                                              ? "/img/focusripple-201.svg"
                                                                                                                              : state.color ===
                                                                                                                                    "warning" &&
                                                                                                                                  state.variant ===
                                                                                                                                    "outlined" &&
                                                                                                                                  state.state ===
                                                                                                                                    "focused" &&
                                                                                                                                  state.size ===
                                                                                                                                    "large"
                                                                                                                                ? "/img/focusripple-202.svg"
                                                                                                                                : state.color ===
                                                                                                                                      "warning" &&
                                                                                                                                    state.variant ===
                                                                                                                                      "outlined" &&
                                                                                                                                    state.state ===
                                                                                                                                      "pressed" &&
                                                                                                                                    state.size ===
                                                                                                                                      "large"
                                                                                                                                  ? "/img/focusripple-203.svg"
                                                                                                                                  : state.variant ===
                                                                                                                                        "outlined" &&
                                                                                                                                      state.color ===
                                                                                                                                        "info" &&
                                                                                                                                      state.state ===
                                                                                                                                        "focused" &&
                                                                                                                                      state.size ===
                                                                                                                                        "large"
                                                                                                                                    ? "/img/focusripple-204.svg"
                                                                                                                                    : state.variant ===
                                                                                                                                          "outlined" &&
                                                                                                                                        state.state ===
                                                                                                                                          "pressed" &&
                                                                                                                                        state.color ===
                                                                                                                                          "info" &&
                                                                                                                                        state.size ===
                                                                                                                                          "large"
                                                                                                                                      ? "/img/focusripple-205.svg"
                                                                                                                                      : state.variant ===
                                                                                                                                            "outlined" &&
                                                                                                                                          state.state ===
                                                                                                                                            "focused" &&
                                                                                                                                          state.color ===
                                                                                                                                            "success" &&
                                                                                                                                          state.size ===
                                                                                                                                            "large"
                                                                                                                                        ? "/img/focusripple-206.svg"
                                                                                                                                        : state.state ===
                                                                                                                                              "pressed" &&
                                                                                                                                            state.variant ===
                                                                                                                                              "outlined" &&
                                                                                                                                            state.color ===
                                                                                                                                              "success" &&
                                                                                                                                            state.size ===
                                                                                                                                              "large"
                                                                                                                                          ? "/img/focusripple-207.svg"
                                                                                                                                          : state.color ===
                                                                                                                                                "primary" &&
                                                                                                                                              state.variant ===
                                                                                                                                                "outlined" &&
                                                                                                                                              state.size ===
                                                                                                                                                "medium" &&
                                                                                                                                              state.state ===
                                                                                                                                                "focused"
                                                                                                                                            ? "/img/focusripple-208.svg"
                                                                                                                                            : state.color ===
                                                                                                                                                  "primary" &&
                                                                                                                                                state.variant ===
                                                                                                                                                  "outlined" &&
                                                                                                                                                state.size ===
                                                                                                                                                  "medium" &&
                                                                                                                                                state.state ===
                                                                                                                                                  "pressed"
                                                                                                                                              ? "/img/focusripple-209.svg"
                                                                                                                                              : state.color ===
                                                                                                                                                    "inherit" &&
                                                                                                                                                  state.variant ===
                                                                                                                                                    "outlined" &&
                                                                                                                                                  state.size ===
                                                                                                                                                    "medium" &&
                                                                                                                                                  state.state ===
                                                                                                                                                    "focused"
                                                                                                                                                ? "/img/focusripple-210.svg"
                                                                                                                                                : state.color ===
                                                                                                                                                      "inherit" &&
                                                                                                                                                    state.variant ===
                                                                                                                                                      "outlined" &&
                                                                                                                                                    state.size ===
                                                                                                                                                      "medium" &&
                                                                                                                                                    state.state ===
                                                                                                                                                      "pressed"
                                                                                                                                                  ? "/img/focusripple-211.svg"
                                                                                                                                                  : state.color ===
                                                                                                                                                        "inherit-white" &&
                                                                                                                                                      state.variant ===
                                                                                                                                                        "outlined" &&
                                                                                                                                                      state.size ===
                                                                                                                                                        "medium" &&
                                                                                                                                                      state.state ===
                                                                                                                                                        "focused"
                                                                                                                                                    ? "/img/focusripple-212.svg"
                                                                                                                                                    : state.color ===
                                                                                                                                                          "inherit-white" &&
                                                                                                                                                        state.variant ===
                                                                                                                                                          "outlined" &&
                                                                                                                                                        state.size ===
                                                                                                                                                          "medium" &&
                                                                                                                                                        state.state ===
                                                                                                                                                          "pressed"
                                                                                                                                                      ? "/img/focusripple-213.svg"
                                                                                                                                                      : state.color ===
                                                                                                                                                            "secondary" &&
                                                                                                                                                          state.variant ===
                                                                                                                                                            "outlined" &&
                                                                                                                                                          state.size ===
                                                                                                                                                            "medium" &&
                                                                                                                                                          state.state ===
                                                                                                                                                            "focused"
                                                                                                                                                        ? "/img/focusripple-214.svg"
                                                                                                                                                        : state.color ===
                                                                                                                                                              "secondary" &&
                                                                                                                                                            state.variant ===
                                                                                                                                                              "outlined" &&
                                                                                                                                                            state.size ===
                                                                                                                                                              "medium" &&
                                                                                                                                                            state.state ===
                                                                                                                                                              "pressed"
                                                                                                                                                          ? "/img/focusripple-215.svg"
                                                                                                                                                          : state.variant ===
                                                                                                                                                                "outlined" &&
                                                                                                                                                              state.color ===
                                                                                                                                                                "error" &&
                                                                                                                                                              state.size ===
                                                                                                                                                                "medium" &&
                                                                                                                                                              state.state ===
                                                                                                                                                                "focused"
                                                                                                                                                            ? "/img/focusripple-216.svg"
                                                                                                                                                            : state.variant ===
                                                                                                                                                                  "outlined" &&
                                                                                                                                                                state.color ===
                                                                                                                                                                  "error" &&
                                                                                                                                                                state.size ===
                                                                                                                                                                  "medium" &&
                                                                                                                                                                state.state ===
                                                                                                                                                                  "pressed"
                                                                                                                                                              ? "/img/focusripple-217.svg"
                                                                                                                                                              : state.color ===
                                                                                                                                                                    "warning" &&
                                                                                                                                                                  state.variant ===
                                                                                                                                                                    "outlined" &&
                                                                                                                                                                  state.size ===
                                                                                                                                                                    "medium" &&
                                                                                                                                                                  state.state ===
                                                                                                                                                                    "focused"
                                                                                                                                                                ? "/img/focusripple-218.svg"
                                                                                                                                                                : state.color ===
                                                                                                                                                                      "warning" &&
                                                                                                                                                                    state.variant ===
                                                                                                                                                                      "outlined" &&
                                                                                                                                                                    state.size ===
                                                                                                                                                                      "medium" &&
                                                                                                                                                                    state.state ===
                                                                                                                                                                      "pressed"
                                                                                                                                                                  ? "/img/focusripple-219.svg"
                                                                                                                                                                  : state.variant ===
                                                                                                                                                                        "outlined" &&
                                                                                                                                                                      state.color ===
                                                                                                                                                                        "info" &&
                                                                                                                                                                      state.size ===
                                                                                                                                                                        "medium" &&
                                                                                                                                                                      state.state ===
                                                                                                                                                                        "focused"
                                                                                                                                                                    ? "/img/focusripple-220.svg"
                                                                                                                                                                    : state.variant ===
                                                                                                                                                                          "outlined" &&
                                                                                                                                                                        state.color ===
                                                                                                                                                                          "info" &&
                                                                                                                                                                        state.size ===
                                                                                                                                                                          "medium" &&
                                                                                                                                                                        state.state ===
                                                                                                                                                                          "pressed"
                                                                                                                                                                      ? "/img/focusripple-221.svg"
                                                                                                                                                                      : state.variant ===
                                                                                                                                                                            "outlined" &&
                                                                                                                                                                          state.color ===
                                                                                                                                                                            "success" &&
                                                                                                                                                                          state.size ===
                                                                                                                                                                            "medium" &&
                                                                                                                                                                          state.state ===
                                                                                                                                                                            "focused"
                                                                                                                                                                        ? "/img/focusripple-222.svg"
                                                                                                                                                                        : state.variant ===
                                                                                                                                                                              "outlined" &&
                                                                                                                                                                            state.color ===
                                                                                                                                                                              "success" &&
                                                                                                                                                                            state.size ===
                                                                                                                                                                              "medium" &&
                                                                                                                                                                            state.state ===
                                                                                                                                                                              "pressed"
                                                                                                                                                                          ? "/img/focusripple-223.svg"
                                                                                                                                                                          : state.variant ===
                                                                                                                                                                                "outlined" &&
                                                                                                                                                                              state.size ===
                                                                                                                                                                                "small" &&
                                                                                                                                                                              state.color ===
                                                                                                                                                                                "primary" &&
                                                                                                                                                                              state.state ===
                                                                                                                                                                                "focused"
                                                                                                                                                                            ? "/img/focusripple-224.svg"
                                                                                                                                                                            : state.variant ===
                                                                                                                                                                                  "outlined" &&
                                                                                                                                                                                state.size ===
                                                                                                                                                                                  "small" &&
                                                                                                                                                                                state.color ===
                                                                                                                                                                                  "primary" &&
                                                                                                                                                                                state.state ===
                                                                                                                                                                                  "pressed"
                                                                                                                                                                              ? "/img/focusripple-225.svg"
                                                                                                                                                                              : state.color ===
                                                                                                                                                                                    "inherit" &&
                                                                                                                                                                                  state.variant ===
                                                                                                                                                                                    "outlined" &&
                                                                                                                                                                                  state.size ===
                                                                                                                                                                                    "small" &&
                                                                                                                                                                                  state.state ===
                                                                                                                                                                                    "focused"
                                                                                                                                                                                ? "/img/focusripple-226.svg"
                                                                                                                                                                                : state.color ===
                                                                                                                                                                                      "inherit" &&
                                                                                                                                                                                    state.variant ===
                                                                                                                                                                                      "outlined" &&
                                                                                                                                                                                    state.size ===
                                                                                                                                                                                      "small" &&
                                                                                                                                                                                    state.state ===
                                                                                                                                                                                      "pressed"
                                                                                                                                                                                  ? "/img/focusripple-227.svg"
                                                                                                                                                                                  : state.color ===
                                                                                                                                                                                        "inherit-white" &&
                                                                                                                                                                                      state.variant ===
                                                                                                                                                                                        "outlined" &&
                                                                                                                                                                                      state.size ===
                                                                                                                                                                                        "small" &&
                                                                                                                                                                                      state.state ===
                                                                                                                                                                                        "focused"
                                                                                                                                                                                    ? "/img/focusripple-228.svg"
                                                                                                                                                                                    : state.color ===
                                                                                                                                                                                          "inherit-white" &&
                                                                                                                                                                                        state.variant ===
                                                                                                                                                                                          "outlined" &&
                                                                                                                                                                                        state.size ===
                                                                                                                                                                                          "small" &&
                                                                                                                                                                                        state.state ===
                                                                                                                                                                                          "pressed"
                                                                                                                                                                                      ? "/img/focusripple-229.svg"
                                                                                                                                                                                      : state.variant ===
                                                                                                                                                                                            "outlined" &&
                                                                                                                                                                                          state.size ===
                                                                                                                                                                                            "small" &&
                                                                                                                                                                                          state.color ===
                                                                                                                                                                                            "secondary" &&
                                                                                                                                                                                          state.state ===
                                                                                                                                                                                            "focused"
                                                                                                                                                                                        ? "/img/focusripple-230.svg"
                                                                                                                                                                                        : state.variant ===
                                                                                                                                                                                              "outlined" &&
                                                                                                                                                                                            state.size ===
                                                                                                                                                                                              "small" &&
                                                                                                                                                                                            state.color ===
                                                                                                                                                                                              "secondary" &&
                                                                                                                                                                                            state.state ===
                                                                                                                                                                                              "pressed"
                                                                                                                                                                                          ? "/img/focusripple-231.svg"
                                                                                                                                                                                          : state.variant ===
                                                                                                                                                                                                "outlined" &&
                                                                                                                                                                                              state.size ===
                                                                                                                                                                                                "small" &&
                                                                                                                                                                                              state.color ===
                                                                                                                                                                                                "error" &&
                                                                                                                                                                                              state.state ===
                                                                                                                                                                                                "focused"
                                                                                                                                                                                            ? "/img/focusripple-232.svg"
                                                                                                                                                                                            : state.variant ===
                                                                                                                                                                                                  "outlined" &&
                                                                                                                                                                                                state.size ===
                                                                                                                                                                                                  "small" &&
                                                                                                                                                                                                state.color ===
                                                                                                                                                                                                  "error" &&
                                                                                                                                                                                                state.state ===
                                                                                                                                                                                                  "pressed"
                                                                                                                                                                                              ? "/img/focusripple-233.svg"
                                                                                                                                                                                              : state.color ===
                                                                                                                                                                                                    "warning" &&
                                                                                                                                                                                                  state.variant ===
                                                                                                                                                                                                    "outlined" &&
                                                                                                                                                                                                  state.size ===
                                                                                                                                                                                                    "small" &&
                                                                                                                                                                                                  state.state ===
                                                                                                                                                                                                    "focused"
                                                                                                                                                                                                ? "/img/focusripple-234.svg"
                                                                                                                                                                                                : state.color ===
                                                                                                                                                                                                      "warning" &&
                                                                                                                                                                                                    state.variant ===
                                                                                                                                                                                                      "outlined" &&
                                                                                                                                                                                                    state.size ===
                                                                                                                                                                                                      "small" &&
                                                                                                                                                                                                    state.state ===
                                                                                                                                                                                                      "pressed"
                                                                                                                                                                                                  ? "/img/focusripple-235.svg"
                                                                                                                                                                                                  : state.variant ===
                                                                                                                                                                                                        "outlined" &&
                                                                                                                                                                                                      state.color ===
                                                                                                                                                                                                        "info" &&
                                                                                                                                                                                                      state.size ===
                                                                                                                                                                                                        "small" &&
                                                                                                                                                                                                      state.state ===
                                                                                                                                                                                                        "focused"
                                                                                                                                                                                                    ? "/img/focusripple-236.svg"
                                                                                                                                                                                                    : state.variant ===
                                                                                                                                                                                                          "outlined" &&
                                                                                                                                                                                                        state.color ===
                                                                                                                                                                                                          "info" &&
                                                                                                                                                                                                        state.size ===
                                                                                                                                                                                                          "small" &&
                                                                                                                                                                                                        state.state ===
                                                                                                                                                                                                          "pressed"
                                                                                                                                                                                                      ? "/img/focusripple-237.svg"
                                                                                                                                                                                                      : state.variant ===
                                                                                                                                                                                                            "outlined" &&
                                                                                                                                                                                                          state.size ===
                                                                                                                                                                                                            "small" &&
                                                                                                                                                                                                          state.color ===
                                                                                                                                                                                                            "success" &&
                                                                                                                                                                                                          state.state ===
                                                                                                                                                                                                            "focused"
                                                                                                                                                                                                        ? "/img/focusripple-238.svg"
                                                                                                                                                                                                        : state.variant ===
                                                                                                                                                                                                              "outlined" &&
                                                                                                                                                                                                            state.size ===
                                                                                                                                                                                                              "small" &&
                                                                                                                                                                                                            state.color ===
                                                                                                                                                                                                              "success" &&
                                                                                                                                                                                                            state.state ===
                                                                                                                                                                                                              "pressed"
                                                                                                                                                                                                          ? "/img/focusripple-239.svg"
                                                                                                                                                                                                          : state.color ===
                                                                                                                                                                                                                "primary" &&
                                                                                                                                                                                                              state.variant ===
                                                                                                                                                                                                                "text" &&
                                                                                                                                                                                                              state.size ===
                                                                                                                                                                                                                "medium" &&
                                                                                                                                                                                                              state.state ===
                                                                                                                                                                                                                "focused"
                                                                                                                                                                                                            ? "/img/focusripple-240.svg"
                                                                                                                                                                                                            : state.color ===
                                                                                                                                                                                                                  "primary" &&
                                                                                                                                                                                                                state.variant ===
                                                                                                                                                                                                                  "text" &&
                                                                                                                                                                                                                state.size ===
                                                                                                                                                                                                                  "medium" &&
                                                                                                                                                                                                                state.state ===
                                                                                                                                                                                                                  "pressed"
                                                                                                                                                                                                              ? "/img/focusripple-241.svg"
                                                                                                                                                                                                              : state.color ===
                                                                                                                                                                                                                    "inherit" &&
                                                                                                                                                                                                                  state.variant ===
                                                                                                                                                                                                                    "text" &&
                                                                                                                                                                                                                  state.size ===
                                                                                                                                                                                                                    "medium" &&
                                                                                                                                                                                                                  state.state ===
                                                                                                                                                                                                                    "focused"
                                                                                                                                                                                                                ? "/img/focusripple-242.svg"
                                                                                                                                                                                                                : state.color ===
                                                                                                                                                                                                                      "inherit" &&
                                                                                                                                                                                                                    state.variant ===
                                                                                                                                                                                                                      "text" &&
                                                                                                                                                                                                                    state.size ===
                                                                                                                                                                                                                      "medium" &&
                                                                                                                                                                                                                    state.state ===
                                                                                                                                                                                                                      "pressed"
                                                                                                                                                                                                                  ? "/img/focusripple-243.svg"
                                                                                                                                                                                                                  : state.color ===
                                                                                                                                                                                                                        "inherit-white" &&
                                                                                                                                                                                                                      state.variant ===
                                                                                                                                                                                                                        "text" &&
                                                                                                                                                                                                                      state.size ===
                                                                                                                                                                                                                        "medium" &&
                                                                                                                                                                                                                      state.state ===
                                                                                                                                                                                                                        "focused"
                                                                                                                                                                                                                    ? "/img/focusripple-244.svg"
                                                                                                                                                                                                                    : state.color ===
                                                                                                                                                                                                                          "inherit-white" &&
                                                                                                                                                                                                                        state.variant ===
                                                                                                                                                                                                                          "text" &&
                                                                                                                                                                                                                        state.size ===
                                                                                                                                                                                                                          "medium" &&
                                                                                                                                                                                                                        state.state ===
                                                                                                                                                                                                                          "pressed"
                                                                                                                                                                                                                      ? "/img/focusripple-245.svg"
                                                                                                                                                                                                                      : state.color ===
                                                                                                                                                                                                                            "secondary" &&
                                                                                                                                                                                                                          state.variant ===
                                                                                                                                                                                                                            "text" &&
                                                                                                                                                                                                                          state.size ===
                                                                                                                                                                                                                            "medium" &&
                                                                                                                                                                                                                          state.state ===
                                                                                                                                                                                                                            "focused"
                                                                                                                                                                                                                        ? "/img/focusripple-246.svg"
                                                                                                                                                                                                                        : state.color ===
                                                                                                                                                                                                                              "secondary" &&
                                                                                                                                                                                                                            state.variant ===
                                                                                                                                                                                                                              "text" &&
                                                                                                                                                                                                                            state.size ===
                                                                                                                                                                                                                              "medium" &&
                                                                                                                                                                                                                            state.state ===
                                                                                                                                                                                                                              "pressed"
                                                                                                                                                                                                                          ? "/img/focusripple-247.svg"
                                                                                                                                                                                                                          : state.variant ===
                                                                                                                                                                                                                                "text" &&
                                                                                                                                                                                                                              state.color ===
                                                                                                                                                                                                                                "error" &&
                                                                                                                                                                                                                              state.size ===
                                                                                                                                                                                                                                "medium" &&
                                                                                                                                                                                                                              state.state ===
                                                                                                                                                                                                                                "focused"
                                                                                                                                                                                                                            ? "/img/focusripple-248.svg"
                                                                                                                                                                                                                            : state.variant ===
                                                                                                                                                                                                                                  "text" &&
                                                                                                                                                                                                                                state.color ===
                                                                                                                                                                                                                                  "error" &&
                                                                                                                                                                                                                                state.size ===
                                                                                                                                                                                                                                  "medium" &&
                                                                                                                                                                                                                                state.state ===
                                                                                                                                                                                                                                  "pressed"
                                                                                                                                                                                                                              ? "/img/focusripple-249.svg"
                                                                                                                                                                                                                              : state.color ===
                                                                                                                                                                                                                                    "warning" &&
                                                                                                                                                                                                                                  state.variant ===
                                                                                                                                                                                                                                    "text" &&
                                                                                                                                                                                                                                  state.size ===
                                                                                                                                                                                                                                    "medium" &&
                                                                                                                                                                                                                                  state.state ===
                                                                                                                                                                                                                                    "focused"
                                                                                                                                                                                                                                ? "/img/focusripple-250.svg"
                                                                                                                                                                                                                                : state.color ===
                                                                                                                                                                                                                                      "warning" &&
                                                                                                                                                                                                                                    state.variant ===
                                                                                                                                                                                                                                      "text" &&
                                                                                                                                                                                                                                    state.size ===
                                                                                                                                                                                                                                      "medium" &&
                                                                                                                                                                                                                                    state.state ===
                                                                                                                                                                                                                                      "pressed"
                                                                                                                                                                                                                                  ? "/img/focusripple-251.svg"
                                                                                                                                                                                                                                  : state.color ===
                                                                                                                                                                                                                                        "info" &&
                                                                                                                                                                                                                                      state.variant ===
                                                                                                                                                                                                                                        "text" &&
                                                                                                                                                                                                                                      state.size ===
                                                                                                                                                                                                                                        "medium" &&
                                                                                                                                                                                                                                      state.state ===
                                                                                                                                                                                                                                        "focused"
                                                                                                                                                                                                                                    ? "/img/focusripple-252.svg"
                                                                                                                                                                                                                                    : state.color ===
                                                                                                                                                                                                                                          "info" &&
                                                                                                                                                                                                                                        state.variant ===
                                                                                                                                                                                                                                          "text" &&
                                                                                                                                                                                                                                        state.size ===
                                                                                                                                                                                                                                          "medium" &&
                                                                                                                                                                                                                                        state.state ===
                                                                                                                                                                                                                                          "pressed"
                                                                                                                                                                                                                                      ? "/img/focusripple-253.svg"
                                                                                                                                                                                                                                      : state.variant ===
                                                                                                                                                                                                                                            "text" &&
                                                                                                                                                                                                                                          state.color ===
                                                                                                                                                                                                                                            "success" &&
                                                                                                                                                                                                                                          state.size ===
                                                                                                                                                                                                                                            "medium" &&
                                                                                                                                                                                                                                          state.state ===
                                                                                                                                                                                                                                            "focused"
                                                                                                                                                                                                                                        ? "/img/focusripple-254.svg"
                                                                                                                                                                                                                                        : state.variant ===
                                                                                                                                                                                                                                              "text" &&
                                                                                                                                                                                                                                            state.color ===
                                                                                                                                                                                                                                              "success" &&
                                                                                                                                                                                                                                            state.size ===
                                                                                                                                                                                                                                              "medium" &&
                                                                                                                                                                                                                                            state.state ===
                                                                                                                                                                                                                                              "pressed"
                                                                                                                                                                                                                                          ? "/img/focusripple-255.svg"
                                                                                                                                                                                                                                          : state.variant ===
                                                                                                                                                                                                                                                "text" &&
                                                                                                                                                                                                                                              state.state ===
                                                                                                                                                                                                                                                "focused" &&
                                                                                                                                                                                                                                              state.color ===
                                                                                                                                                                                                                                                "primary" &&
                                                                                                                                                                                                                                              state.size ===
                                                                                                                                                                                                                                                "large"
                                                                                                                                                                                                                                            ? "/img/focusripple-256.svg"
                                                                                                                                                                                                                                            : state.state ===
                                                                                                                                                                                                                                                  "pressed" &&
                                                                                                                                                                                                                                                state.variant ===
                                                                                                                                                                                                                                                  "text" &&
                                                                                                                                                                                                                                                state.color ===
                                                                                                                                                                                                                                                  "primary" &&
                                                                                                                                                                                                                                                state.size ===
                                                                                                                                                                                                                                                  "large"
                                                                                                                                                                                                                                              ? "/img/focusripple-257.svg"
                                                                                                                                                                                                                                              : state.color ===
                                                                                                                                                                                                                                                    "inherit" &&
                                                                                                                                                                                                                                                  state.variant ===
                                                                                                                                                                                                                                                    "text" &&
                                                                                                                                                                                                                                                  state.state ===
                                                                                                                                                                                                                                                    "focused" &&
                                                                                                                                                                                                                                                  state.size ===
                                                                                                                                                                                                                                                    "large"
                                                                                                                                                                                                                                                ? "/img/focusripple-258.svg"
                                                                                                                                                                                                                                                : state.color ===
                                                                                                                                                                                                                                                      "inherit" &&
                                                                                                                                                                                                                                                    state.state ===
                                                                                                                                                                                                                                                      "pressed" &&
                                                                                                                                                                                                                                                    state.variant ===
                                                                                                                                                                                                                                                      "text" &&
                                                                                                                                                                                                                                                    state.size ===
                                                                                                                                                                                                                                                      "large"
                                                                                                                                                                                                                                                  ? "/img/focusripple-259.svg"
                                                                                                                                                                                                                                                  : state.color ===
                                                                                                                                                                                                                                                        "inherit-white" &&
                                                                                                                                                                                                                                                      state.variant ===
                                                                                                                                                                                                                                                        "text" &&
                                                                                                                                                                                                                                                      state.state ===
                                                                                                                                                                                                                                                        "focused" &&
                                                                                                                                                                                                                                                      state.size ===
                                                                                                                                                                                                                                                        "large"
                                                                                                                                                                                                                                                    ? "/img/focusripple-260.svg"
                                                                                                                                                                                                                                                    : state.color ===
                                                                                                                                                                                                                                                          "inherit-white" &&
                                                                                                                                                                                                                                                        state.variant ===
                                                                                                                                                                                                                                                          "text" &&
                                                                                                                                                                                                                                                        state.state ===
                                                                                                                                                                                                                                                          "pressed" &&
                                                                                                                                                                                                                                                        state.size ===
                                                                                                                                                                                                                                                          "large"
                                                                                                                                                                                                                                                      ? "/img/focusripple-261.svg"
                                                                                                                                                                                                                                                      : state.variant ===
                                                                                                                                                                                                                                                            "text" &&
                                                                                                                                                                                                                                                          state.state ===
                                                                                                                                                                                                                                                            "focused" &&
                                                                                                                                                                                                                                                          state.color ===
                                                                                                                                                                                                                                                            "secondary" &&
                                                                                                                                                                                                                                                          state.size ===
                                                                                                                                                                                                                                                            "large"
                                                                                                                                                                                                                                                        ? "/img/focusripple-262.svg"
                                                                                                                                                                                                                                                        : state.state ===
                                                                                                                                                                                                                                                              "pressed" &&
                                                                                                                                                                                                                                                            state.variant ===
                                                                                                                                                                                                                                                              "text" &&
                                                                                                                                                                                                                                                            state.color ===
                                                                                                                                                                                                                                                              "secondary" &&
                                                                                                                                                                                                                                                            state.size ===
                                                                                                                                                                                                                                                              "large"
                                                                                                                                                                                                                                                          ? "/img/focusripple-263.svg"
                                                                                                                                                                                                                                                          : state.state ===
                                                                                                                                                                                                                                                                "focused" &&
                                                                                                                                                                                                                                                              state.variant ===
                                                                                                                                                                                                                                                                "text" &&
                                                                                                                                                                                                                                                              state.color ===
                                                                                                                                                                                                                                                                "error" &&
                                                                                                                                                                                                                                                              state.size ===
                                                                                                                                                                                                                                                                "large"
                                                                                                                                                                                                                                                            ? "/img/focusripple-264.svg"
                                                                                                                                                                                                                                                            : state.state ===
                                                                                                                                                                                                                                                                  "pressed" &&
                                                                                                                                                                                                                                                                state.variant ===
                                                                                                                                                                                                                                                                  "text" &&
                                                                                                                                                                                                                                                                state.color ===
                                                                                                                                                                                                                                                                  "error" &&
                                                                                                                                                                                                                                                                state.size ===
                                                                                                                                                                                                                                                                  "large"
                                                                                                                                                                                                                                                              ? "/img/focusripple-265.svg"
                                                                                                                                                                                                                                                              : state.color ===
                                                                                                                                                                                                                                                                    "warning" &&
                                                                                                                                                                                                                                                                  state.variant ===
                                                                                                                                                                                                                                                                    "text" &&
                                                                                                                                                                                                                                                                  state.state ===
                                                                                                                                                                                                                                                                    "focused" &&
                                                                                                                                                                                                                                                                  state.size ===
                                                                                                                                                                                                                                                                    "large"
                                                                                                                                                                                                                                                                ? "/img/focusripple-266.svg"
                                                                                                                                                                                                                                                                : state.color ===
                                                                                                                                                                                                                                                                      "warning" &&
                                                                                                                                                                                                                                                                    state.variant ===
                                                                                                                                                                                                                                                                      "text" &&
                                                                                                                                                                                                                                                                    state.state ===
                                                                                                                                                                                                                                                                      "pressed" &&
                                                                                                                                                                                                                                                                    state.size ===
                                                                                                                                                                                                                                                                      "large"
                                                                                                                                                                                                                                                                  ? "/img/focusripple-267.svg"
                                                                                                                                                                                                                                                                  : state.color ===
                                                                                                                                                                                                                                                                        "info" &&
                                                                                                                                                                                                                                                                      state.variant ===
                                                                                                                                                                                                                                                                        "text" &&
                                                                                                                                                                                                                                                                      state.state ===
                                                                                                                                                                                                                                                                        "focused" &&
                                                                                                                                                                                                                                                                      state.size ===
                                                                                                                                                                                                                                                                        "large"
                                                                                                                                                                                                                                                                    ? "/img/focusripple-268.svg"
                                                                                                                                                                                                                                                                    : state.state ===
                                                                                                                                                                                                                                                                          "pressed" &&
                                                                                                                                                                                                                                                                        state.color ===
                                                                                                                                                                                                                                                                          "info" &&
                                                                                                                                                                                                                                                                        state.variant ===
                                                                                                                                                                                                                                                                          "text" &&
                                                                                                                                                                                                                                                                        state.size ===
                                                                                                                                                                                                                                                                          "large"
                                                                                                                                                                                                                                                                      ? "/img/focusripple-269.svg"
                                                                                                                                                                                                                                                                      : state.state ===
                                                                                                                                                                                                                                                                            "focused" &&
                                                                                                                                                                                                                                                                          state.variant ===
                                                                                                                                                                                                                                                                            "text" &&
                                                                                                                                                                                                                                                                          state.color ===
                                                                                                                                                                                                                                                                            "success" &&
                                                                                                                                                                                                                                                                          state.size ===
                                                                                                                                                                                                                                                                            "large"
                                                                                                                                                                                                                                                                        ? "/img/focusripple-270.svg"
                                                                                                                                                                                                                                                                        : state.state ===
                                                                                                                                                                                                                                                                              "pressed" &&
                                                                                                                                                                                                                                                                            state.variant ===
                                                                                                                                                                                                                                                                              "text" &&
                                                                                                                                                                                                                                                                            state.color ===
                                                                                                                                                                                                                                                                              "success" &&
                                                                                                                                                                                                                                                                            state.size ===
                                                                                                                                                                                                                                                                              "large"
                                                                                                                                                                                                                                                                          ? "/img/focusripple-271.svg"
                                                                                                                                                                                                                                                                          : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "primary" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                            ? "/img/focusripple-272.svg"
                                                                                                                                                                                                                                                                            : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "primary" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-273.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "inherit" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-274.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "inherit" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-275.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "inherit-white" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-276.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "inherit-white" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-277.svg"
                                                                                                                                                                                                                                                                             : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "secondary" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-278.svg"
                                                                                                                                                                                                                                                                             : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "secondary" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-279.svg"
                                                                                                                                                                                                                                                                             : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "error" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-280.svg"
                                                                                                                                                                                                                                                                             : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "error" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-281.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "warning" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-282.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "warning" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-283.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "info" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-284.svg"
                                                                                                                                                                                                                                                                             : state.color ===
                                                                                                                                                                                                                                                                               "info" &&
                                                                                                                                                                                                                                                                             state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-285.svg"
                                                                                                                                                                                                                                                                             : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "success" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "focused"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-286.svg"
                                                                                                                                                                                                                                                                             : state.size ===
                                                                                                                                                                                                                                                                               "small" &&
                                                                                                                                                                                                                                                                             state.color ===
                                                                                                                                                                                                                                                                               "success" &&
                                                                                                                                                                                                                                                                             state.variant ===
                                                                                                                                                                                                                                                                               "text" &&
                                                                                                                                                                                                                                                                             state.state ===
                                                                                                                                                                                                                                                                               "pressed"
                                                                                                                                                                                                                                                                             ? "/img/focusripple-287.svg"
                                                                                                                                                                                                                                                                             : "/img/focusripple-144.svg"
          }
        />
      )}

      <div className="base">
        <button className="text-wrapper">{label}</button>
      </div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Button.propTypes = {
  label: PropTypes.string,
  endIcon: PropTypes.bool,
  startIcon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf([
    "warning",
    "inherit",
    "info",
    "success",
    "secondary",
    "primary",
    "inherit-white",
    "error",
  ]),
  stateProp: PropTypes.oneOf([
    "enabled",
    "pressed",
    "focused",
    "hovered",
    "disabled",
  ]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
};
