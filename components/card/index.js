import { motion } from 'framer-motion'
import s from './card.module.css'

export default function Card({ item }) {
  return (
    <motion.div
      className={s.card}
      whileHover={{
        scale: 1.1,
        zIndex: 99,
      }}
      transition={{ duration: 0.25 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt={item.name || item.title}
      />
    </motion.div>
  )
}
