import { ComponentMeta, ComponentStory } from "@storybook/react";
import Item from "./Item";

export default {
  title: "Components|Basic/Item",
  component: Item,
  argTypes: {
    location: { defaultValue: 0 },
  },
} as ComponentMeta<typeof Item>;

export const Template: ComponentStory<typeof Item> = (args) => (
  <Item {...args} />
);
