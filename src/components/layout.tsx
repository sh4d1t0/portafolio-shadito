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
      <nav className="flex justify-center pb-8 space-x-4">
        {[
          ['Home', '/'],
          ['About', '/about'],
        ].map(([title, url]) => (
          <Link
            key={title}
            to={url}
            className="font-medium px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900"
          >
            {title}
          </Link>
        ))}
      </nav>
      <main>
        <h1 className="flex justify-center pb-8 text-3xl font-bold underline">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
