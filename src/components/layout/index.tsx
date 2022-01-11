import React, { FC } from 'react'
import { graphql, Link, PageProps, StaticQuery, useStaticQuery } from 'gatsby'
import Title from '../Title'

interface LayoutProps {
  pageTitle: string
}

export const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="container mx-auto">
      <Title pageTitle={pageTitle} />
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
