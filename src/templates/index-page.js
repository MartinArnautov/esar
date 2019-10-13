import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({ title, content, contentComponent, image}) => {
  const PageContent = contentComponent || Content

  return (
          <div>
            <div
              className="full-width-image margin-top-0"
              style={{
                backgroundImage: `url(${
                  !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  height: '150px',
                  lineHeight: '1',
                  justifyContent: 'space-around',
                  alignItems: 'left',
                  flexDirection: 'column',
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  style={{
                    boxShadow:
                      'rgba(43, 31, 91, .64) 0.5rem 0px 0px, rgba(43, 31, 91, .64) -0.5rem 0px 0px',
                    backgroundColor: 'rgba(43, 31, 91, .64)',
                    color: 'white',
                    lineHeight: '1',
                    padding: '0.25em',
                    margin: '2em 0 0',
                  }}
                >
                  {title}
                </h1>
              </div>
            </div>
            <section className="section section--gradient">
              <div className="container">
                <div className="section">
                  <div className="columns">
                    <div className="column is-10 is-offset-1">
                      <div className="content">
                        <div className="content">
                          <div className="tile">
                            <h1 className="title">{title}</h1>
                          </div>
                          <div className="tile">
                            <PageContent className="content" content={content} />
                          </div>
                        </div>
                        <div className="column is-12">
                          <h3 className="has-text-weight-semibold is-size-2">
                            Latest stories
                          </h3>
                          <BlogRoll />
                          <div className="column is-12 has-text-centered">
                            <Link className="btn" to="/blog">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
  )}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
