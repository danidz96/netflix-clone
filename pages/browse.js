import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@hooks/useUser'
import SelectProfileContainer from '@components/browse/containers/selectProfile'
import Loading from '@components/browse/loading'
import Lolomo from '@components/browse/lolomo'

export default function Browse() {
  const router = useRouter()
  const { user, selectedProfile } = useUser()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!user) {
      router.replace('/signin')
    }
  }, [user, router])

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [selectedProfile?.full_name])

  if (isLoading && selectedProfile?.full_name)
    return <Loading avatar={selectedProfile.avatar_url} />

  if (!selectedProfile) return <SelectProfileContainer />

  return (
    <>
      <Lolomo category={'TVShows'} />
    </>
  )
}
