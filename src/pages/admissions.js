import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import downloadFile from "../DownloadFiles/S20C-420031811082.pdf"

const Admissions= () => (
    <Layout>
      
      <h1>Rekrutacja</h1>
      <div>
        <a href={downloadFile} download>Pobierz formularz</a>{` `}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
  
  export default Admissions