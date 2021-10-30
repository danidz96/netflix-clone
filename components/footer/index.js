import s from './footer.module.css'

export default function Footer({ children, ...restProps }) {
  return (
    <footer className={s.container} {...restProps}>
      {children}
    </footer>
  )
}

Footer.Links = function FooterLinks({ children, ...restProps }) {
  return (
    <ul className={s.links} {...restProps}>
      {children}
    </ul>
  )
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return (
    <li className={s.link} {...restProps}>
      {children}
    </li>
  )
}

Footer.Top = function FooterTop({ children, ...restProps }) {
  return (
    <p className={s.top} {...restProps}>
      {children}
    </p>
  )
}

Footer.Country = function FooterCountry({ children, ...restProps }) {
  return (
    <p className={s.country} {...restProps}>
      {children}
    </p>
  )
}
