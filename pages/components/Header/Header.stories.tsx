import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Components|Basic/Header",
  component: Header,
  argTypes: {
  },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => {
  const [location, setLocation] = useState(0);
  const [modal, modalSet] = useState(true);
  return <Header {...args} setLocation={setLocation} modalSet={modalSet} />;
};