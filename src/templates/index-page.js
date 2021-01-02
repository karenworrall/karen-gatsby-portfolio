import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Hero from '../components/Hero'
import { FaLightbulb, FaPencilAlt, FaGlasses } from 'react-icons/fa'
// import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import { Subtitle } from '../components/Custom'

export const IndexPageTemplate = ({
  heroImage1,
  heroImage2,
  heroImage3,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  clientLogos,
}) => (
  <div>
    <Hero
      heroImage={heroImage1}
      minHeight="100vh"
      title="Karen Worrall"
      content="I write engaging copy that educates, entertains, connects, persuades and sells—whatever your project needs."
      button="See my work"
      buttonRoute="/portfolio" />
    {/* <BackgroundImage
      className="hero is-large"
      style={{ backgroundAttachment: 'fixed', minHeight: '100vh' }}
      fluid={heroImage1.childImageSharp.fluid}
    >
      <div className="hero-body has-text-white is-family-secondary">
        <div className="container is-max-desktop has-text-centered">
          <div className="columns">
            <div className="column is-5">
              <div className="box has-text-white has-background-black-opacity">
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                  Karen Worrall
                </h1>
                <h3 className=" is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-left">
                  I write engaging copy that educates, entertains, connects, persuades and sells—whatever your project needs.
                </h3>
                <Link to="/portfolio">
                  <button className="button is-link has-text-black mt-4">
                    See my work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </BackgroundImage> */}
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
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
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div> */}
    <section className="section section--gradient">
      <div className="container">
        {/* <div className="section"> */}
        <Subtitle>Featured In</Subtitle>
        <div className="columns is-multiline is-mobile">
          {clientLogos.map((logo, index) => (
            <div key={index} className="column is-half-mobile is-one-quarter-tablet">
              <PreviewCompatibleImage imageInfo={logo.image} />
            </div>
          ))}
        </div>

        {/* <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
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
          </div> */}
        {/* </div> */}
      </div>
    </section>
    <Hero
      heroImage={heroImage2}
      content="Want to know how I can help you?"
      button="Writing services"
      buttonRoute="/services"
      minHeight="70vh"
    />
    {/* <BackgroundImage
      className="hero is-large"
      style={{ backgroundAttachment: 'fixed', minHeight: '50vh' }}
      fluid={heroImage2.childImageSharp.fluid}
    >
      <div className="hero-body">


      </div>
    </BackgroundImage> */}
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="circular-icon" style={{ margin: '0 auto' }}>
              <FaLightbulb />
            </div>
            <h3 className="has-text-centered is-size-4 has-text-semibold has-text-primary my-3">
              Overflowing ideas
              </h3>
            <p className="is-size-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, facilis voluptates error illo asperiores rem eligendi deleniti eum laboriosam minus quod culpa necessitatibus perspiciatis veniam harum, blanditiis cumque unde provident?
              </p>
          </div>
          <div className="column">
            <div className="circular-icon" style={{ margin: '0 auto' }}>
              <FaGlasses />
            </div>
            <h3 className="has-text-centered is-size-4 has-text-semibold has-text-primary my-3">
              Eye for detail
              </h3>
            <p className="is-size-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, facilis voluptates error illo asperiores rem eligendi deleniti eum laboriosam minus quod culpa necessitatibus perspiciatis veniam harum, blanditiis cumque unde provident?
              </p>
          </div>
          <div className="column">
            <div className="circular-icon" style={{ margin: '0 auto' }}>
              <FaPencilAlt />
            </div>
            <h3 className="has-text-centered is-size-4 has-text-semibold has-text-primary my-3">
              Words, words and more words
              </h3>
            <p className="is-size-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, facilis voluptates error illo asperiores rem eligendi deleniti eum laboriosam minus quod culpa necessitatibus perspiciatis veniam harum, blanditiis cumque unde provident?
              </p>
          </div>
        </div>
      </div>
    </section>
    <Hero
      heroImage={heroImage3}
      content="Once you are ready, get in touch!"
      button="Contact"
      buttonRoute="/contact"
      minHeight="70vh"
    />
    {/* <BackgroundImage
      className="hero is-large"
      style={{ backgroundAttachment: 'fixed', minHeight: '50vh' }}
      fluid={heroImage3.childImageSharp.fluid}
    >
      <div className="hero-body"></div>
    </BackgroundImage> */}
  </div>
)

IndexPageTemplate.propTypes = {
  heroImage1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) =>
{
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heroImage1={frontmatter.heroImage1}
        heroImage2={frontmatter.heroImage2}
        heroImage3={frontmatter.heroImage3}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        clientLogos={frontmatter.clientLogos}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heroImage1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImage2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImage3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        clientLogos {
          image{
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
