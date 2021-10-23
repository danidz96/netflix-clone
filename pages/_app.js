import { UserContextProvider } from '@hooks/useUser'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
