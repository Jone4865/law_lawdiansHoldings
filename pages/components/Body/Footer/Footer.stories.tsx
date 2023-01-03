import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components|Basic/Footer",
  component: Footer,
  argTypes: {
  },
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer />;
};
