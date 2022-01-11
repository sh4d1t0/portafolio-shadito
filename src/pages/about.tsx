import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

export default function AboutPage({ children }: PageProps) {
  const pageTitle = 'Acerca de'

  return (
    <Layout pageTitle={pageTitle} {...children}>
      <p className="subpixel-antialiased">Información personal va a ir aquí</p>
    </Layout>
  )
}
