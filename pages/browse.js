import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@hooks/useUser'
import SelectProfileContainer from '@components/browse/containers/selectProfile'

export default function Browse() {
  const router = useRouter()
  const { user, selectedProfile } = useUser()

  useEffect(() => {
    if (!user) {
      router.replace('/signin')
    }
  }, [user, router])

  if (!selectedProfile) return <SelectProfileContainer />

  return <>Browse</>
}
