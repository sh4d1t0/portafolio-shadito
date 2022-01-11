import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from '.'

export default {
  title: 'Basics/Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = args => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  pageTitle: 'About',
  siteTitle: 'Something',
}
