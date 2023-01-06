
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Side from "./Side";
import { useState } from "react";

export default {
  title: "Components|Basic/Side",
  component: Side,
  argTypes: {
    modal: {defaultValue: true},
  },
} as ComponentMeta<typeof Side>;

export const Template: ComponentStory<typeof Side> = (args) => {
  const [location, setLocation] = useState(0);
  const [modal, setModalState] = useState(true);
  const [position, setContentClick] = useState(true);

  return <Side {...args} setLocation={setLocation} setModalState={setModalState} setContentClick={setContentClick} />;
};