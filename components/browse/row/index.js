import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { fetchRowItems } from 'helpers/browseHelpers'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Card from '@components/card'
import useViewport from '@hooks/useViewport'
import s from './row.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
SwiperCore.use([Navigation, Pagination])

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

  //Swiper config
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const width = useViewport()

  const customSwiperParams = {
    observer: true,
    observeParents: true,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    breakpoints: {
      1378: { slidesPerView: 6, slidesPerGroup: 6 },
      998: { slidesPerView: 4, slidesPerGroup: 4 },
      625: { slidesPerView: 3, slidesPerGroup: 3 },
      330: { slidesPerView: 2, slidesPerGroup: 2 },
      0: { slidesPerView: 1.5, slidesPerGroup: 1.5 },
    },
    loopAdditionalSlides:
      width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
    pagination: true,
    loop: false,
    grabCursor: false,
    draggable: false,
    preventClicksPropagation: true,
    preventClicks: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
  }

  return (
    <div className={s.container}>
      <h2 className={s.titleWrapper}>
        <Link href={``} passHref>
          <div className="group">
            <span className="title">{section.title}</span>
            <span className={clsx(s.showMore, 'group-hover:opacity-100')}>
              Show all <ChevronRightIcon className={s.showMoreIcon} />
            </span>
          </div>
        </Link>
      </h2>
      <div>
        <div className={clsx(s.sliderArrow, s.left)} ref={navigationPrevRef}>
          <ChevronLeftIcon />
        </div>
        <div className={clsx(s.sliderArrow, s.right)} ref={navigationNextRef}>
          <ChevronRightIcon />
        </div>
        <Swiper
          {...customSwiperParams}
          className={s.swiperWrapper}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
        >
          {sliderItems?.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <Card key={item.id} item={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
