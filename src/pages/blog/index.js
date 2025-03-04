import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0 blog"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                'rgba(43, 31, 91, .24) 0.5rem 0px 0px, rgba(43, 31, 91, .24) -0.5rem 0px 0px',
                backgroundColor: 'rgba(43, 31, 91, .24)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              margin: '2em 0 0',
                  }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
