import Link from 'next/link'
import Image from 'next/image'
import Button from '@components/layout/button'
import Logo from '@components/layout/logo'
import s from './navbar.module.css'

export default function Navbar({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      {children}
    </div>
  )
}

Navbar.Logo = function NavbarLogo({ children, user, ...restProps }) {
  return (
    <Link href={user ? '/browse' : '/'}>
      <a aria-label="Logo">
        <Logo className={s.logo} {...restProps} />
      </a>
    </Link>
  )
}

Navbar.Button = function NavbarButton({ children, ...restProps }) {
  return (
    <Button className={s.button} {...restProps}>
      {children}
    </Button>
  )
}

Navbar.Links = function NavbarLinks({ children, ...restProps }) {
  return (
    <ul className={s.links} {...restProps}>
      {children}
    </ul>
  )
}

Navbar.Link = function NavbarLink({ children, ...restProps }) {
  return (
    <li className={s.link} {...restProps}>
      {children}
    </li>
  )
}

Navbar.Profile = function NavbarProfile({ children, user, ...restProps }) {
  if (!user?.avatar_url) return null
  return (
    <Image
      src={user?.avatar_url}
      alt={`${user?.full_name} avatar image`}
      width="32px"
      height="32px"
      className={s.profile}
      {...restProps}
    >
      {children}
    </Image>
  )
}
