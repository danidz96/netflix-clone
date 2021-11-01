import { UserContextProvider } from '@hooks/useUser'
import Layout from '@components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  )
}

export default MyApp
