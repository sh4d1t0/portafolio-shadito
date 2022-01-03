// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Acerca de">
      <p className="subpixel-antialiased">Información personal va a ir aquí</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
