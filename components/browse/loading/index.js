/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import s from './loading.module.css'

function Loading() {
  return (
    <div className={s.spinner}>
      <div className={s.picture}>
        <Image
          src={`/images/avatars/Avatar_01.png`}
          alt="loading-picture"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  )
}

export default Loading
