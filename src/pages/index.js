import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImageLogo from "../components/image logo"
import SEO from "../components/seo"
import styled from 'styled-components'
import Branches from '../components/branches'
import Services from '../components/services'


const Banner = styled.div`
  background: #FFF8B4;
  padding: 30px
`

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Banner>
      <div style={{ maxWidth: `300px`, margin: `0 auto`, marginBottom: `1.45rem`,  }}>
        <ImageLogo />
      </div>
      </Banner>
      <Branches/>
      <Services/>

  </Layout>
)

export default IndexPage
