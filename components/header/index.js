import Logo from '@components/logo'
import Link from 'next/link'
import s from './header.module.css'

export default function Header({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      {children}
    </div>
  )
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return (
    <Link href="/">
      <a aria-label="Logo">
        <Logo className={s.logo} {...restProps} />
      </a>
    </Link>
  )
}

Header.Button = function HeaderButton({ children, ...restProps }) {
  return (
    <button className={s.button} {...restProps}>
      {children}
    </button>
  )
}
