import React from 'react'
import * as stories from './Title.stories'
import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby'

const { Default } = composeStories(stories)

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: 'Portafolio Shadito',
        },
      },
    })
  )
})

test(`should render`, () => {
  render(<Default {...Default.args} />)
})
