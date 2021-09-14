import Image from 'next/image'
import s from './jumbotron.module.css'

export default function Jumbotron({ children, ...restProps }) {
  return (
    <div className={s.item} {...restProps}>
      <div className={s.inner}>{children}</div>
    </div>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      {children}
    </div>
  )
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return (
    <h1 className={s.title} {...restProps}>
      {children}
    </h1>
  )
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return (
    <h2 className={s.subtitle} {...restProps}>
      {children}
    </h2>
  )
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return (
    <Image
      className={s.image}
      width={576}
      height={432}
      quality="85"
      {...restProps}
    />
  )
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return (
    <div className={s.pane} {...restProps}>
      {children}
    </div>
  )
}
