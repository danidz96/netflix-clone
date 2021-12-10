import { useState, useRef, useEffect, useContext } from 'react'
import clsx from 'clsx'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import { SearchIcon } from '@heroicons/react/solid'
import s from './search.module.css'

export default function Search() {
  const [isActive, setIsActive] = useState(false)
  const searchRef = useRef()

  useOnClickOutside(searchRef, () => setIsActive(false))

  const inputClassName = clsx(s.input, isActive && s.inputActive)
  const iconClassName = clsx(s.icon, isActive && s.iconActive)

  return (
    <div ref={searchRef} className={s.root}>
      <SearchIcon className={iconClassName} onClick={() => setIsActive(true)} />
      <input
        className={inputClassName}
        placeholder="Movie or TV show title"
        type="text"
      />
    </div>
  )
}
