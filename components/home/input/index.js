import clsx from 'clsx'
import s from './input.module.css'

export default function Input({ className, children, onChange, ...rest }) {
  const rootClassName = clsx(s.root, {}, className)

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}
