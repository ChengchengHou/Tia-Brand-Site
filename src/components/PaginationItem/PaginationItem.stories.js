import { PaginationItem } from ".";

export default {
  title: "Components/PaginationItem",
  component: PaginationItem,

  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    variant: {
      options: ["text", "outlined"],
      control: { type: "select" },
    },
    shape: {
      options: ["rounded", "circular"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "standard"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    active: true,
    icon: true,
    size: "large",
    variant: "text",
    shape: "rounded",
    color: "primary",
    disabled: true,
    className: {},
    labelClassName: {},
    text: "1",
  },
};
