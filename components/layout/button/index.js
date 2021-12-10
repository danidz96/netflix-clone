import clsx from 'clsx'
import s from './button.module.css'

export default function Button({
  className,
  variant = 'primary',
  active,
  disabled,
  children,
  ...rest
}) {
  const rootClassName = clsx(
    s.root,
    {
      [s.primary]: variant === 'primary',
      [s.secondary]: variant === 'secondary',
      [s.tertiary]: variant === 'tertiary',
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
