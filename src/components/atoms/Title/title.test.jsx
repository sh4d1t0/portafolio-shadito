import React from 'react'
import { Default } from './Title.stories'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby'

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
