import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
// import Navigation from "./mainnav";
import { Container } from "react-bootstrap";

const Nav = () => (
  <Container>
  
  
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Nav {
            navText
          }
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={data =>
      <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                
              </ul>
            </div>

            <div className="uk-navbar-right">
            <button className="uk-button uk-button-default uk-margin-right" type="button">Categories</button>
            <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                { data.allStrapiCategory.edges.map((category, i) => {
                    return (
                      <li key={`category__${category.node.slug}`}>
                        <Link to={`/category/${category.node.slug}`}>
                          {category.node.name}
                        </Link>
                      </li>
                    )
                  })
                }
                </ul>
            </div>
            </div>
          </nav>
        </div>
      </div>
    }
  />
</Container>
)

export default Nav
