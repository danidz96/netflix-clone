import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@hooks/useUser'

export default function Browse() {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      router.replace('/signin')
    }
  }, [user])

  return <>Browse page</>
}
