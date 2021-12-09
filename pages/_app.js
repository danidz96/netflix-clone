import { UserContextProvider } from '@hooks/useUser'
import Layout from '@components/layout'
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
