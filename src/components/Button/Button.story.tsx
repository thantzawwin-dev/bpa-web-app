import React from 'react';
import { Story, ComponentMeta } from "@storybook/react";
import { Button, Props } from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  // argTypes: {
  //   children: {
  //     control: {
  //       type: "text",
  //     },
  //   },
  // },
  // parameters: {
  //   controls: { expanded: true },
  // },
} as ComponentMeta<typeof Button>;

const Template: Story<Props> = (args: JSX.IntrinsicAttributes & Props) => <Button {...args} >Press me</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};