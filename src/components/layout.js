import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/layout_custom.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      file(name: {eq: "logo"}) {
        publicURL
      
      }
    }
  `)
 

  return (
    <>
      <Header siteLogo={data.file.publicURL} />
      <div
        style={{
          
          margin: `0 auto`,
          
          

         
          
        }}
      >
        <main>{children}</main>
        <footer>
         
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
