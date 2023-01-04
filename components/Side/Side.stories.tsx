import { ComponentMeta, ComponentStory } from "@storybook/react";
import Side from "./Side";
import { useState } from "react";

export default {
  title: "Components|Basic/Side",
  component: Side,
  argTypes: {
    modal: { defaultValue: true },
  },
} as ComponentMeta<typeof Side>;

export const Template: ComponentStory<typeof Side> = (args) => {
  const [modal, modalSet] = useState(false);
  return <Side {...args} modalSet={(modal:boolean) => modalSet(false)} />;
};
