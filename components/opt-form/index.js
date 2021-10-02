import s from './opt-form.module.css'
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function OptForm({ children, ...restProps }) {
  return (
    <form className={s.container} {...restProps}>
      {children}
    </form>
  )
}

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return (
    <h3 className={s.title} {...restProps}>
      {children}
    </h3>
  )
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return (
    <input className={s.input} {...restProps}>
      {children}
    </input>
  )
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <button className={s.button} {...restProps}>
      {children} <ChevronRightIcon className={s.icon} />
    </button>
  )
}
