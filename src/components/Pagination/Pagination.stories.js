import { Pagination } from ".";

export default {
  title: "Components/Pagination",
  component: Pagination,

  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", "standard"],
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
  },
};

export const Default = {
  args: {
    showLastButton: true,
    showFirstButton: true,
    hidePrevButton: true,
    hideNextButton: true,
    size: "large",
    color: "primary",
    variant: "text",
    shape: "rounded",
    disabled: true,
    className: {},
    visible: true,
    visible1: true,
    visible2: true,
  },
};
