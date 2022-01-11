import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'

interface LayoutProps {
  pageTitle: string
}

interface LayoutQuery {
  site: {
    siteMetadata?: {
      title: string
    }
  }
}

const Title: FC<LayoutProps> = ({ pageTitle }) => {
  const data = useStaticQuery<LayoutQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  if (!data.site.siteMetadata) {
    throw new Error('El sitio no tiene un Titulo y es importante para el SEO')
  }
  pageTitle = pageTitle || ''
  const siteTitle = data.site.siteMetadata.title

  return (
    <title>
      {pageTitle} | {siteTitle}
    </title>
  )
}

export default Title
