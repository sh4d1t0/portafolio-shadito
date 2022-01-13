import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small Button',
  size: 'small',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large Button',
  size: 'large',
  variant: 'primary',
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  backgroundColor: 'red',
  label: 'Custom Color',
  variant: 'primary',
}
