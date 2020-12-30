import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { motion } from 'framer-motion'
import { Subtitle, Title } from '../components/Custom'
// import bulmaCollapsible from '@creativebulma/bulma-collapsible';

export const ServicesPageTemplate = ({ title, content, contentComponent, serviceItems }) =>
{
  const PageContent = contentComponent || Content

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .2
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
              {/* <h2 className="title is-size-2 has-text-centered has-text-weight-bold is-bold-light is-family-secondary">
                {title}
              </h2> */}
              <PageContent className="content" content={content} />
              <motion.div
                className="columns is-multiline"
                variants={variants}
                initial="hidden"
                animate="show"
              >
                {serviceItems.map((item) => (
                  <motion.div key={item.title} variants={itemVariants} className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet">
                    <div className="card">
                      <header className="card-header has-text-centered">
                        <p className="card-header-title is-size-5 has-text-dark is-uppercase" style={{ justifyContent: 'center' }}>
                          {item.title}
                        </p>
                      </header>
                      <div className="card-content is-flex is-align-items-center">
                        <div className="content" style={{ alignSelf: 'center' }} dangerouslySetInnerHTML={{ __html: item.description }}>

                        </div>
                      </div>
                    </div>


                  </motion.div>
                ))}
              </motion.div>
              <Subtitle>FAQs</Subtitle>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicesPage = ({ data }) =>
{
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
        serviceItems={post.frontmatter.serviceItems}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        serviceItems {
          title
          description
        }
      }
    }
  }
`
