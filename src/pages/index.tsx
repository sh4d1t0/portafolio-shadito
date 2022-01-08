import React from 'react'
import Layout from '../components/layout'
import PresentationCard from '../components/PresentationCard'

interface IndexProps {
  onModal: () => void
}

export default function IndexPage({ onModal }: IndexProps) {
  return (
    <Layout pageTitle="Home">
      <PresentationCard onModal={onModal} />
    </Layout>
  )
}
