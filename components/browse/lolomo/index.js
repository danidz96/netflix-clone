import { TMDB } from '@data/tmdbEndpoints.js'
import Row from '../row'

function Lolomo({ category }) {
  return (
    <div>
      {TMDB[category].sections.map((section, index) => {
        return (
          <div key={index}>
            <Row section={section} />
          </div>
        )
      })}
    </div>
  )
}

export default Lolomo
