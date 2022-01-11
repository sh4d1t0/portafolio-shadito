import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'

interface LayoutProps {
  pageTitle: string
  data: {
    site: {
      siteMetadata?: {
        title: string
      }
    }
  }
}

interface LayoutQuery {
  site: {
    siteMetadata?: {
      title: string
    }
  }
}

const PureTitle: FC<LayoutProps> = ({ data, pageTitle }) => {
  /*const data = useStaticQuery<LayoutQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )*/
  let siteTitle = ''
  if (data.site.siteMetadata) {
    siteTitle = data.site.siteMetadata.title
  }
  pageTitle = pageTitle

  return (
    <title>
      {pageTitle} | {siteTitle}
    </title>
  )
}

export default function Title(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <PureTitle {...props} data={data} />}
    />
  )
}
