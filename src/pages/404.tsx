import React from 'react'
import { graphql, Link, PageProps, useStaticQuery } from 'gatsby'
import { PureLayout as Layout } from '../components/layout'

interface NotFoundProps {
  pageTitle: string
}

type LayoutQuery = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export default function NotFoundPage(
  { pageTitle }: NotFoundProps,
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
  pageTitle = '404'

  return (
    <Layout data={data} pageTitle={pageTitle} {...children}>
      <h1 data-testid="not-found" className="decoration-pink-500">
        Pagina no encontrada
      </h1>
      <p className="subpixel-antialiased">
        Lo sentimos{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        no pudimos encontrar lo que buscabas.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Intentando crear pagina en{' '}
            <code className="codeStyles">src/pages/</code>
            <br />
          </>
        ) : null}
        <br />
        <Link
          to="/"
          className="font-medium px-3 py-2 text-gray-700 underline decoration-indigo-500 hover:decoration-pink-500 hover:text-gray-900"
        >
          Regresar al Home
        </Link>
        .
      </p>
    </Layout>
  )
}
