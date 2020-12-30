import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, widgetFor }) =>
{
  const entryServices = entry.getIn(['data', 'servicesItems'])
  const services = entryServices ? entryServices.toJS() : []

  return (
    <ServicesPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      servicesItems={services}
    />
  )
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicesPagePreview
