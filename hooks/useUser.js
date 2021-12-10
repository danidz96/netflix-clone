import { useEffect, useState, createContext, useContext } from 'react'
import { supabase } from '@utils/supabase-client'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserProfile = async () => {
      const sessionUser = supabase.auth.user()

      if (sessionUser) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', sessionUser.id)
          .single()

        setUser({
          ...sessionUser,
          ...profile,
        })
      }
    }

    getUserProfile()

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        getUserProfile()
      }
    )

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const value = {
    user,
    signIn: (options) => supabase.auth.signIn(options),
    signUp: (options) => supabase.auth.signUp(options),
    signOut: () => {
      setUser(null)
      return supabase.auth.signOut()
    },
  }
  return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
