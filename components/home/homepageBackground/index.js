import Image from 'next/image'

import bgImage from '../../../public/images/home/home-bg.jpg'
import s from './homepageBackground.module.css'

export default function HomepageBackground({ children, ...restProps }) {
  return (
    <div className={s.container} {...restProps}>
      <div className={s.image}>
        <Image
          src={bgImage}
          quality={90}
          layout="fill"
          objectFit="cover"
          alt="Netflix catalog background image"
        />
        <div className={s.gradient}></div>
      </div>
      {children}
    </div>
  )
}
