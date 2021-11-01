import Button from '@components/button'
import Input from '@components/input'
import s from './form.module.css'

export default function Form({ onSubmit, children, ...restProps }) {
  return (
    <form onSubmit={onSubmit} className={s.root} {...restProps}>
      {children}
    </form>
  )
}

Form.Container = function FormContainer({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      {children}
    </div>
  )
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return (
    <h1 className={s.title} {...restProps}>
      {children}
    </h1>
  )
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />
}

Form.Button = function FormButton({ children, ...restProps }) {
  return (
    <Button type="submit" className={s.button} {...restProps}>
      {children}
    </Button>
  )
}
