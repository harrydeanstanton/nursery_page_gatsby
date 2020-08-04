import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ImageGallery from "../components/imageGallery"

const Gallery = () =>  (
    <Layout>
      
      <h1>opis</h1>
      <ImageGallery/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  

export default Gallery