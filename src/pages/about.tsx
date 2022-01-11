import { graphql, PageProps, useStaticQuery } from 'gatsby'
import React from 'react'
import { PureLayout as Layout } from '../components/layout'

interface AboutPageProps {
  pageTitle: string
}

type LayoutQuery = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export default function AboutPage(
  { pageTitle }: AboutPageProps,
  { children }: PageProps
) {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  pageTitle = 'Acerca de'

  return (
    <Layout data={data} pageTitle={pageTitle} {...children}>
      <p className="subpixel-antialiased">Información personal va a ir aquí</p>
    </Layout>
  )
}
