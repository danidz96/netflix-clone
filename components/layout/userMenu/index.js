import Image from 'next/image'
import { useUser } from '@hooks/useUser'
import s from './userMenu.module.css'
import clsx from 'clsx'

function UserMenu() {
  const { user, selectedProfile, signOut } = useUser()

  if (!selectedProfile?.avatar_url) return null

  return (
    <div className={s.wrapper}>
      <Image
        src={selectedProfile?.avatar_url}
        alt={`${selectedProfile?.full_name} avatar image`}
        width="32px"
        height="32px"
        className={s.profile}
      />
      <ul className={s.dropdown}>
        <li className={s.dropdownItem}>
          <Image
            src={selectedProfile?.avatar_url}
            alt={`${selectedProfile?.full_name} avatar image`}
            width="32px"
            height="32px"
            className={s.profile}
          />
          <span>{selectedProfile?.full_name}</span>
        </li>
        <li className={s.dropdownItem}>
          <span>Manage profiles</span>
        </li>
        <li className={s.dropdownItem} onClick={signOut}>
          <span>Sign out of Netflix</span>
        </li>
      </ul>
      <span className={s.caret} />
    </div>
  )
}

export default UserMenu
