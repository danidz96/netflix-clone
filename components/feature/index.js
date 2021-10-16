import React from 'react'
import s from './feature.module.css'

export default function Feature({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      {children}
    </div>
  )
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return (
    <h1 className={s.title} {...restProps}>
      {children}
    </h1>
  )
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return (
    <h2 className={s.subtitle} {...restProps}>
      {children}
    </h2>
  )
}
