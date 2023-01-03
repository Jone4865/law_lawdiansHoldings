import { ComponentMeta, ComponentStory } from "@storybook/react";
import More from "./More";
import { useState } from "react";

export default {
  title: "Components|Basic/More",
  component: More,
  argTypes: {
    title: { defaultValue: "안심병원" },
    more: { defaultValue: "안심병원" },
  },
} as ComponentMeta<typeof More>;

export const Template: ComponentStory<typeof More> = (args) => {
  const [more, setMore] = useState(false);
  return <More {...args} setMore={(more:string) => ""} />;
};