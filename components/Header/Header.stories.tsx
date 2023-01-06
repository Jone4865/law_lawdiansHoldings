
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";
import { useState } from "react";

export default {
  title: "Components|Basic/Header",
  component: Header,
  argTypes: {
  },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => {
  const [location, setLocation] = useState(0);
  const [modal, setModalState] = useState(false);
  const [position, setContentClick] = useState(false);

  return <Header setLocation={setLocation} setModalState={setModalState} setContentClick={setContentClick} />;
};