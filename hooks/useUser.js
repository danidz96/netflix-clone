import { useEffect, useState, createContext, useContext } from 'react'
import { supabase } from '@utils/supabase-client'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? null)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    )

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user,
    signIn: (options) => supabase.auth.signIn(options),
    signUp: (options) => supabase.auth.signUp(options),
    signOut: () => {
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
