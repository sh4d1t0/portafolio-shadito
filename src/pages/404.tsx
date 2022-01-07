import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function NotFoundPage() {
  return (
    <Layout pageTitle="404">
      <h1 className="decoration-pink-500">Pagina no encontrada</h1>
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
