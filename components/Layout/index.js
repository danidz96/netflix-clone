import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import Navbar from '@components/navbar'
import Footer from '@components/footer'
import { useUser } from '@hooks/useUser'

export default function Layout({ children }) {
  const { user, signOut } = useUser()
  const router = useRouter()

  const handleSignOut = () => {
    signOut().then(() => {
      router.replace('/')
    })
  }

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Navbar.Container>
          <Navbar.Logo />
          <Navbar.Button>
            {user ? (
              <Link href="#">
                <a onClick={handleSignOut}>Sign out</a>
              </Link>
            ) : (
              <Link href="/signin">
                <a>Sign in</a>
              </Link>
            )}
          </Navbar.Button>
        </Navbar.Container>
      </Navbar>
      <main id="skip" className="-mt-16">
        {children}
      </main>
      <Footer>
        <Footer.Top>Questions? Call 900 822 377</Footer.Top>
        <Footer.Links>
          <Footer.Link>
            <Link href="#">
              <a>FAQ</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Investor Relations</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Ways to Watch</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Corporate Information</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Help Center</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Jobs</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Terms of Use</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Contact Us</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Account</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Reedem Gift Cards</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Privacy</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Speed Test</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Media Center</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Buy Gift Cards</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Cookies preferences</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Legal Notices</a>
            </Link>
          </Footer.Link>
          <Footer.Link>
            <Link href="#">
              <a>Only on Netflix</a>
            </Link>
          </Footer.Link>
        </Footer.Links>
        <Footer.Country>Netflix Spain</Footer.Country>
      </Footer>
    </>
  )
}
