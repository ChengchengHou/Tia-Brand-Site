import { Chip } from ".";

export default {
  title: "Components/Chip",
  component: Chip,

  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: [
        "warning",
        "info",
        "default",
        "success",
        "secondary",
        "primary",
        "error",
      ],
      control: { type: "select" },
    },
    state: {
      options: ["enabled", "pressed", "focused", "disabled"],
      control: { type: "select" },
    },
    variant: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Chip",
    delete1: false,
    thumbnail: false,
    size: "medium",
    color: "warning",
    state: "enabled",
    variant: "outlined",
    className: {},
  },
};
