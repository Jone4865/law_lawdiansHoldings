import { ComponentMeta, ComponentStory } from "@storybook/react";
import MoreItem from "./MoreItem";

export default {
  title: "Components|Basic/MoreItem",
  component: MoreItem,
  argTypes: {
    more: { defaultValue: "안심병원" },
    title: { defaultValue: "안심병원" },
    items: {defaultValue: ["메뉴1", "메뉴2", "메뉴3"]}
  },
} as ComponentMeta<typeof MoreItem>;

export const Template: ComponentStory<typeof MoreItem> = (args) => (
  <MoreItem {...args} />
);
