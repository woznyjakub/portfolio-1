import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Caption } from '../../components'
const FurtherSkills = () => (
  <StaticQuery
    query={graphql`
      query {
        gatsby: file(relativePath: { eq: "gatsby.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        webpack: file(relativePath: { eq: "webpack.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        git: file(relativePath: { eq: "git.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        linux: file(relativePath: { eq: "linux.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <Img fluid={data.gatsby.childImageSharp.fluid} />
          <Caption>GatsbyJS</Caption>
        </div>
        <div>
          <Img fluid={data.webpack.childImageSharp.fluid} />
          <Caption>Webpack</Caption>
        </div>
        <div>
          <Img fluid={data.git.childImageSharp.fluid} />
          <Caption>Git</Caption>
        </div>
        <div>
          <Img fluid={data.linux.childImageSharp.fluid} />
          <Caption>Linux</Caption>
        </div>
      </>
    )}
  />
)

export default FurtherSkills
