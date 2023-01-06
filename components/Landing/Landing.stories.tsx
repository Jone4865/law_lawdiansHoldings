
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Landing from "./Landing";
import { useState } from "react";

export default {
  title: "Components|Basic/Landing",
  component: Landing,
  argTypes: {
  },
} as ComponentMeta<typeof Landing>;

export const Template: ComponentStory<typeof Landing> = () => {
  return <Landing />;
};