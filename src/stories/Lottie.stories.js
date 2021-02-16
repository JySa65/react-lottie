import * as React from 'react'
import Lottie from "./lottie-control";

export default {
  title: "Lottie/Lotties",
  component: Lottie,
};


const Template = (args) => <Lottie {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Lottie1",
};
