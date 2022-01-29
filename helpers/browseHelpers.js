import tmdb from '@data/tmdb.js'

export const fetchRowItems = async (section) => {
  const { data } = await tmdb.get(
    section.endpoint.replace('&page=_pageNumber', '')
  )

  const { results: sliderItems } = data

  return sliderItems
}
