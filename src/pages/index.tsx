import { graphql, PageProps, useStaticQuery } from 'gatsby'
import React from 'react'
import { PureLayout as Layout } from '../components/layout'
import PresentationCard from '../components/PresentationCard'

interface IndexProps {
  onModal: () => void
  pageTitle: string
}

type LayoutQuery = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export default function IndexPage(
  { onModal, pageTitle }: IndexProps,
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
  pageTitle = 'Home'
  return (
    <>
      <Layout data={data} pageTitle={pageTitle} {...children}>
        <PresentationCard onModal={onModal} />
      </Layout>
    </>
  )
}
