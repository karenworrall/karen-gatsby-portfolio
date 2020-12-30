import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Title } from '../components/Custom'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PortfolioItem = ({ active, item, handleClick, index }) =>
{
  return (

    <AnimatePresence >
      {active &&
        <motion.div
          className="column is-one-third-desktop is-half-tablet"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5, transition: { duration: .2 } }}
          layout
        >
          <div
            className="card is-clickable"
            role="button"
            tabIndex={index}
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            <div className="card-image">
              <PreviewCompatibleImage imageInfo={item.thumbImage} radius={0} />
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-size-4 has-text-centered">{item.title}</p>
              </div>
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>

  )
}

const PortfolioModal = ({ setModalActive, activePortfolio }) =>
{
  return (

    <div className={"modal is-active"}>
      <motion.div
        onClick={() => setModalActive(false)}
        className="modal-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="modal-card"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
      >
        <header className="modal-card-head">
          <h3 className="modal-card-title has-text-weight-bold is-flex-shrink-1">{activePortfolio.title}</h3>
          <button onClick={() => setModalActive(false)} className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className="columns">
            <div className="column is-7">
              <PreviewCompatibleImage style={{ minHeight: '70vh' }} imageInfo={activePortfolio.mainImage} radius={0} />
            </div>
            <div className="column is-5">
              <div className="content">
                <p className="subtitle">{activePortfolio.shortDescription}</p>
                <hr />
                <p>{activePortfolio.longDescription}</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <div className="container is-flex is-justify-content-center">
            {/* <span className="icon">
              <i className="fas fa-angle-right"></i>
            </span> */}
            <a target="blank" rel="noopener noreferrer" href={activePortfolio.link}>
              <button className="button is-success">Read More</button>
            </a>
          </div>
        </footer>
      </motion.div>

    </div>

  )
}

const PortfolioTag = ({ tag, handleClick, currentFilter }) =>
{
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 50
  }
  return (
    < div className="column is-half-mobile has-text-centered" >
      {/* eslint-disable-next-line */}
      <div
        className="box is-flex is-clickable is-align-items-center is-justify-content-center"
        style={{ position: 'relative', height: '100%' }}
        // isSelected={filter === tag}
        onClick={handleClick}
      >

        {currentFilter === tag && (
          <motion.div
            className="box has-background-primary"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 4
            }}
            layoutId="highlight"
            initial={false}
            transition={spring}
            animate
          />
        )}
        <p style={{ position: 'relative', zIndex: 5 }}>{tag}</p>
      </div>

    </div >
  )
}

export const PortfolioPageTemplate = ({ title, tags, content, contentComponent, portfolioItems }) =>
{
  const PageContent = contentComponent || Content

  const [modalActive, setModalActive] = useState(false)
  const [activePortfolio, setActivePortfolio] = useState(portfolioItems[0])
  const [filter, setFilter] = useState('All')



  const openModal = index =>
  {
    setActivePortfolio(portfolioItems[index]);
    setModalActive(true);
  }
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <Title>{title}</Title>
              <PageContent className="content" content={content} />
              <div className="columns is-mobile is-multiline">
                <AnimateSharedLayout>
                  <PortfolioTag tag="All" handleClick={() => setFilter("All")} currentFilter={filter} />
                  {tags.map((tag, index) => (
                    <PortfolioTag key={index} tag={tag} handleClick={() => setFilter(tag)} currentFilter={filter} />
                  ))}
                </AnimateSharedLayout>
              </div>
              <div className="columns is-multiline">
                <AnimateSharedLayout type="crossfade">
                  {portfolioItems.map((item, index) => (
                    <PortfolioItem
                      key={index}
                      item={item}
                      handleClick={() => openModal(index)}
                      active={filter === 'All' || item.tags.includes(filter)}
                    />
                  ))}
                </AnimateSharedLayout>

              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {modalActive &&
          <PortfolioModal
            setModalActive={setModalActive}
            modalActive={modalActive}
            activePortfolio={activePortfolio}
          />}
      </AnimatePresence>

    </section>
  )
}

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PortfolioPage = ({ data }) =>
{
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        portfolioItems={post.frontmatter.portfolioItems}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PortfolioPage

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tags
        portfolioItems {
          title
          shortDescription
          longDescription
          tags
          link
          mainImage {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
