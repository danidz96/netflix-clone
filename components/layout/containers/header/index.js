import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '@components/layout/navbar'
import Search from '@components/layout/search'
import { useUser } from '@hooks/useUser'

export default function HeaderContainer() {
  const { user, signOut, selectedProfile } = useUser()
  const router = useRouter()

  const handleSignOut = () => {
    signOut().then(() => {
      router.replace('/')
    })
  }

  const showNavbarLinks =
    router.pathname === '/browse' ? (selectedProfile ? true : false) : true

  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Logo user={user} />
        {showNavbarLinks &&
          (user ? (
            <>
              <Navbar.Links>
                <Navbar.Link>TV Shows</Navbar.Link>
                <Navbar.Link>Movies</Navbar.Link>
              </Navbar.Links>
              <Search />
              <Navbar.Profile />
            </>
          ) : (
            <Link href="/signin" passHref>
              <Navbar.Button>
                <a>Sign in</a>
              </Navbar.Button>
            </Link>
          ))}
      </Navbar.Container>
    </Navbar>
  )
}
