import React from 'react'

export const Title = ({ children }) =>
{
  return (
    <h2 className="title is-size-2 has-text-centered has-text-weight-bold has-text-grey-dark is-family-secondary">
      {children}
    </h2>
  )
}

export const Subtitle = ({ children }) =>
{
  return (
    <h3 className="subtitle is-size-3 has-text-centered has-text-weight-bold has-text-grey-dark is-family-secondary">
      {children}
    </h3>
  )
}