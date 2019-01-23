import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Caption } from '../../components'
const BasicSkills = () => (
  <StaticQuery
    query={graphql`
      query {
        html: file(relativePath: { eq: "html.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        css: file(relativePath: { eq: "css.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        js: file(relativePath: { eq: "js.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        sass: file(relativePath: { eq: "sass.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        react: file(relativePath: { eq: "react.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        styled: file(relativePath: { eq: "styled.jpg" }) {
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
          <Img fluid={data.html.childImageSharp.fluid} />
          <Caption>HTML</Caption>
        </div>
        <div>
          <Img fluid={data.css.childImageSharp.fluid} />
          <Caption>CSS</Caption>
        </div>
        <div>
          <Img fluid={data.js.childImageSharp.fluid} />
          <Caption>JavaScript</Caption>
        </div>
        <div>
          <Img fluid={data.sass.childImageSharp.fluid} />
          <Caption>Sass</Caption>
        </div>
        <div>
          <Img fluid={data.react.childImageSharp.fluid} />
          <Caption>React</Caption>
        </div>
        <div>
          <Img fluid={data.styled.childImageSharp.fluid} />
          <Caption>Styled Components</Caption>
        </div>
      </>
    )}
  />
)

export default BasicSkills
