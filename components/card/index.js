import Image from 'next/image'
import s from './card.module.css'

export default function Card({ item }) {
  return (
    <div className={s.card}>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt={item.name || item.title}
      />
    </div>
  )
}
