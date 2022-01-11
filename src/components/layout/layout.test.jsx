import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from "gatsby"

import { PureLayout as Layout } from '.'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "Portafolio Shadito",
        },
      },
    })
  )
})

describe(`Layout`, () => {
  it(`Layout renders correctly`, () => {
    const pageTitle = "404"
    const data = {
        site: {
          siteMetadata: {
            title: "Portafolio Shadito"
          }
        }
    }
    const LayoutRender = render(<Layout data={data} pageTitle={pageTitle} />)
    expect(LayoutRender).toMatchSnapshot()
  })
})
