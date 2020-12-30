import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Subtitle, Title } from '../components/Custom'

export const AboutPageTemplate = ({ title, content, contentComponent, image, education }) =>
{
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <Title>{title}</Title>
              <div className="columns">
                <div className="column is-4">
                  <PreviewCompatibleImage imageInfo={image} />
                </div>
                <div className="column is-8">
                  <PageContent className="content" content={content} />
                </div>
              </div>
              <section className="hero is-primary">
                <div className="hero-body has-text-centered">
                  <div className="container">
                    <h1 className="title">
                      Want to talk about a project?
                    </h1>
                    <h2 className="subtitle">
                      Let's chat:
                       <a href="mailto:info@karenworrall.co.uk" target="_blank" rel="noopener noreferrer">info@karenworrall.co.uk</a>
                    </h2>
                  </div>
                </div>
              </section>

              <Subtitle>Education</Subtitle>
              <p>I’m a big believer in constant personal development and honing your craft. Here’s a summary of my relevant education so far:</p>
              <ul>
                {education.map(item => (
                  <li>{item.year} - {item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) =>
{
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        education={post.frontmatter.education}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        education {
          year
          text
        }
      }
    }
  }
`
