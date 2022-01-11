import React, { FC } from 'react'
import { graphql, Link, PageProps, StaticQuery, useStaticQuery } from 'gatsby'

interface LayoutProps {
  pageTitle?: string
  siteTitle?: string
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const PureLayout: FC<LayoutProps> = ({
  data,
  pageTitle,
  siteTitle,
  children,
}) => {
  siteTitle = data.site.siteMetadata.title
  return (
    <div className="container mx-auto">
      <title>
        {pageTitle} | {siteTitle}
      </title>
      <nav>
        {[
          ['Home', '/'],
          ['About', '/about'],
        ].map(([title, url]) => (
          <Link key={title} to={url}>
            {title}
          </Link>
        ))}
      </nav>
      <main>
        <h1 className="flex justify-center pb-8 text-3xl font-bold">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export const Layout = ({ props }) => {
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
      render={data => <PureLayout {...props} data={data} />}
    />
  )
}

export default Layout
