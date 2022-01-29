import s from './card.module.css'

export default function Card({ item }) {
  return (
    <div>
      <h2 className={s.container}>{item.name}</h2>
    </div>
  )
}
