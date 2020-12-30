import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Title } from '../components/Custom'

const Testimonial = ({ testimonial }) =>
{


  return (


    <div className="card">
      <div className="card-content">
        <div className="media is-align-items-center">
          <div className="media-left">
            <Img style={{ borderRadius: '64px' }} fixed={testimonial.image.childImageSharp.fixed} />
          </div>
          <div className="media-content">
            <p className="title is-4">{testimonial.author}</p>
            <p className="subtitle is-6">{testimonial.position}</p>
          </div>
        </div>
        <hr />
        <div className="content">
          <cite>"{testimonial.quote}"</cite>
        </div>
      </div>
    </div>

  )
}


export const TetsimonialPageTemplate = ({ title, content, contentComponent, testimonialItems }) =>
{
  const PageContent = contentComponent || Content

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    show: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <Title>{title}</Title>
              <PageContent className="content" content={content} />
              <motion.div className="columns is-multiline" variants={variants} initial="hidden" animate="show">
                {testimonialItems.map((testimonial) => (
                  <motion.div variants={itemVariants} className="column is-half-tablet">

                    <Testimonial key={testimonial.author} testimonial={testimonial} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TetsimonialPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TestimonialPage = ({ data }) =>
{
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TetsimonialPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
        testimonialItems={post.frontmatter.testimonialItems}
      />
    </Layout>
  )
}

TestimonialPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestimonialPage

export const testimonialPageQuery = graphql`
  query TestimonialPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        testimonialItems {
          author
          quote
          position
          image {
            childImageSharp {
              fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
