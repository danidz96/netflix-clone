import { useEffect, useState } from 'react'
import { fetchRowItems } from 'helpers/browseHelpers'
import Card from '@components/card'

export default function Row({ section, category }) {
  const [sliderItems, setSliderItems] = useState(null)

  useEffect(() => {
    const getSliderItems = async () => {
      const sliderItems = await fetchRowItems(section)

      const filteredItems = sliderItems.filter(
        ({ backdrop_path, poster_path }) => backdrop_path && poster_path
      )

      console.log(filteredItems)
      setSliderItems(filteredItems)
    }
    getSliderItems()
  }, [section, category])

  return (
    <div>
      <h2>{section.title}</h2>
      {sliderItems?.map((item, index) => {
        return <Card key={item.id} item={item} />
      })}
    </div>
  )
}
