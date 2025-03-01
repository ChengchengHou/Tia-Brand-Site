import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,

  argTypes: {
    size: {
      options: ["large", "inherit", "medium", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["SVG-icon", "font-icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    type: "SVG-icon",
    className: {},
  },
};
