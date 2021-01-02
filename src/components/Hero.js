import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

function Hero({ heroImage, minHeight, title, content, button, buttonRoute })
{


  return (
    <BackgroundImage
      className="hero is-large"
      style={{ backgroundAttachment: 'fixed', minHeight: minHeight }}
      fluid={heroImage.childImageSharp.fluid}
    >
      <div className="hero-body has-text-white is-family-secondary">
        <div className="container is-max-desktop has-text-centered">
          <div className="columns">
            <div className="column is-5">
              <div className="has-text-white has-background-black-opacity">
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                  {title}
                </h1>
                <p className=" is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-left">
                  {content}
                </p>
                <Link to={buttonRoute}>
                  <button className="button is-link has-text-black mt-4">
                    {button}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </BackgroundImage>
  );
}

export default Hero;