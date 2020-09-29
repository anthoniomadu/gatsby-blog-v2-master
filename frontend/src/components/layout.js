import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./mainnav"
import Nav from "./nav"
import Seo from "./seo"
import { Container } from "react-bootstrap"


const Layout = ({ children }) => (
 
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Seo {
            metaTitle
            metaDescription
            shareImage {
              image {
                publicURL
              }
            }
          }
        }
      }
    `}
  render={data => (
    <>
      <Seo
          title={data.strapiHomepage.Seo.metaTitle}
          description={data.strapiHomepage.Seo.metaDescription}
          image={data.strapiHomepage.Seo.shareImage.image.url}
        />
      <Nav />
      <main>{children}</main>
    </>
  )}
  />
 
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
