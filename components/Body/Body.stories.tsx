import { ComponentMeta, ComponentStory } from "@storybook/react";
import Item from "./Body";
import { useState } from "react";

export default {
  title: "Components|Basic/Item",
  component: Item,
  argTypes: {
    location: { defaultValue: 0 },
    position: { defaultValue: true },
  },
} as ComponentMeta<typeof Item>;

export const Template: ComponentStory<typeof Item> = (args) => {
  const [location, setLocation] = useState(0);
  return <Item {...args} setLocation={setLocation} />;
};
