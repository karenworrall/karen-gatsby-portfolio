import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
// import copywriter from '../img/badge-copywriter.png'
// import editor from '../img/badge-editor.png'
// import proofreader from '../img/badge-proofreader.png'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaAngleDoubleUp } from 'react-icons/fa'

// import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = ({ data }) =>
{

  const badgeStyle = {
    width: '200px',
    padding: '0 20px'
    // margin: '0 auto',
    // display: 'block'
  }
  const blurbs = data.markdownRemark.frontmatter.intro.blurbs

  return (
    <footer className="footer has-background-light has-text-dark is-relative">
      <button className="back-to-top box has-background-light has-text-dark" onClick={() => scrollTo('#top')} style={{ cursor: 'pointer' }}>
        <FaAngleDoubleUp />
      </button>
      {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
      <div className="content ">
        <div className="container">
          <div className="is-flex is-flex-wrap-wrap is-justify-content-center mb-3">
            {blurbs.map((blurb, index) => (
              <div key={index} style={badgeStyle}>
                <PreviewCompatibleImage key={index} imageInfo={blurb.image} />

              </div>
            ))}

            {/* <img style={badgeStyle} src={copywriter} alt="copywriter" />

            <img style={badgeStyle} src={editor} alt="editor" />

            <img style={badgeStyle} src={proofreader} alt="proofreader" /> */}

          </div>
          <div className="is-flex is-flex-wrap-wrap is-justify-content-space-around">
            <p>Copywright &#169; 2020 Karen Worrall</p>
            <p>Website created by <a href='https://nickworrall.co.uk' target='blank' rel='noopener noreferrer'>Nick Worrall</a>
            </p>
          </div>
          {/* <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div> */}
        </div>
      </div>
    </footer>
  )

}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
          frontmatter {
            intro {
              blurbs {
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 60){
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
)


