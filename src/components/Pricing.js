import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

const Pricing = ({ data }) =>
{
  const [dollars, setDollars] = useState(false)
  return (
    <>
      <Switch isOn={dollars} handleSwitch={setDollars} />
      {`Pricing in ${dollars ? '$ dollars' : '£ pounds'}`}
      <div className="columns is-multiline">
        {data.map((price) => (
          <div key={price.plan} className="column is-one-third-desktop is-half-tablet">
            <div className="box">
              <section className="section">
                <h4 className="has-text-centered is-size-4 has-text-weight-semibold">
                  {price.plan}
                </h4>
                <h2 className="is-size-3 has-text-weight-bold has-text-dark has-text-centered">
                  {dollars ? `$${price.dollars}` : `£${price.pounds}`}
                </h2>
                <p className="has-text-weight-semibold">{price.description}</p>
                <ul>
                  {price.items.map((item) => (
                    <li key={item} className="is-size-6">
                      - {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
