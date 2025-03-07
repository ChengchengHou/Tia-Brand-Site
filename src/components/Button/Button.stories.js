import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: [
        "warning",
        "inherit",
        "info",
        "success",
        "secondary",
        "primary",
        "inherit-white",
        "error",
      ],
      control: { type: "select" },
    },
    stateProp: {
      options: ["enabled", "pressed", "focused", "hovered", "disabled"],
      control: { type: "select" },
    },
    variant: {
      options: ["text", "outlined", "contained"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    endIcon: false,
    startIcon: false,
    size: "large",
    color: "warning",
    stateProp: "enabled",
    variant: "text",
    className: {},
  },
};
