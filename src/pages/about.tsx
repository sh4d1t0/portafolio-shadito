import React from 'react'
import Layout from '../components/templates/general'

export default function AboutPage() {
  const pageTitle = 'Acerca de'

  return (
    <Layout pageTitle={pageTitle}>
      <p className="subpixel-antialiased">Información personal va a ir aquí</p>
    </Layout>
  )
}
