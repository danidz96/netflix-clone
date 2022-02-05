import Image from 'next/image'
import s from './card.module.css'

export default function Card({ item }) {
  return (
    <div className={s.card}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt={item.name || item.title}
          width={357}
          height={201}
        />
      </div>
    </div>
  )
}
