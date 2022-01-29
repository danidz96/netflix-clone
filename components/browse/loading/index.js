/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import s from './loading.module.css'

function Loading({ avatar }) {
  return (
    <div className={s.spinner}>
      <div className={s.picture}>
        <Image src={avatar} alt="loading-picture" width="50px" height="50px" />
      </div>
    </div>
  )
}

export default Loading
