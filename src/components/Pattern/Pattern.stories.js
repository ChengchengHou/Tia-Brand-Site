import { Pattern } from ".";

export default {
  title: "Components/Pattern",
  component: Pattern,

  argTypes: {
    option: {
      options: ["two", "three", "four", "one", "five", "six"],
      control: { type: "select" },
    },
    version: {
      options: ["half-tone", "lines"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    option: "two",
    version: "half-tone",
    className: {},
    tiaLinepatternCmykClassName: {},
  },
};
