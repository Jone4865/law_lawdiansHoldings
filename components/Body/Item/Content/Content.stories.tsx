import { ComponentMeta, ComponentStory } from "@storybook/react";
import Content from "./Content";

export default {
  title: "Components|Basic/Content",
  component: Content,
  argTypes: {
    title: { defaultValue: "정기 배당 수익을 통해" },
    subTitle: { defaultValue: "13번째 월급을 만들어봐요" },
    contentLine1: { defaultValue: "보유한 지분만큼 높은 수준의" },
    contentLine2: { defaultValue: "배당 수익을 기대할 수 있어요." },
    name: { defaultValue: true },
  },
} as ComponentMeta<typeof Content>;

export const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);
