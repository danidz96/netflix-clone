import Image from 'next/image'
import s from './profiles.module.css'

export default function Profiles({ children, ...restProps }) {
  return (
    <div className={s.root} {...restProps}>
      {children}
    </div>
  )
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return (
    <h1 className={s.title} {...restProps}>
      {children}
    </h1>
  )
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return (
    <ul className={s.list} {...restProps}>
      {children}
    </ul>
  )
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return (
    <li className={s.user} {...restProps}>
      {children}
    </li>
  )
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={s.picture}
      {...restProps}
      src={src || '/images/avatars/placeholder.png'}
      height="110px"
      width="110px"
    />
  )
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return (
    <span className={s.name} {...restProps}>
      {children}
    </span>
  )
}
