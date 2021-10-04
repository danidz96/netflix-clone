import { useState, useContext, createContext } from 'react'
import { PlusIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import s from './accordion.module.css'

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      <div className={s.inner}>{children}</div>
    </div>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return (
    <h1 className={s.title} {...restProps}>
      {children}
    </h1>
  )
}

Accordion.Content = function AccordionContent({ children, ...restProps }) {
  return (
    <ul className={s.content} {...restProps}>
      {children}
    </ul>
  )
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleContext.Provider value={[toggleShow, setToggleShow]}>
      <li className={s.item} {...restProps}>
        {children}
      </li>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useContext(ToggleContext)
  return (
    <button
      className={s.header}
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <XIcon className={s.icon} />
      ) : (
        <PlusIcon className={s.icon} />
      )}
    </button>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const [toggleShow] = useContext(ToggleContext)
  const style = clsx(s.content, toggleShow ? s.open : s.closed)
  return (
    <div className={style}>
      <p className={s.body} {...restProps}>
        {children}
      </p>
    </div>
  )
}
