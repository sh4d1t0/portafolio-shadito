import React, { useState } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import PresentationCard from '../components/PresentationCard'

export default function IndexPage({ children }: PageProps) {
  const pageTitle = 'Home'

  return (
    <Layout pageTitle={pageTitle} {...children}>
      <PresentationCard />
    </Layout>
  )
}
