import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Layout: FC<{ pageTitle?: string }> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container mx-auto">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
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

export default Layout
