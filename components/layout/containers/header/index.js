import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '@components/layout/navbar'
import Search from '@components/layout/search'
import { useUser } from '@hooks/useUser'

export default function HeaderContainer() {
  const { user, signOut } = useUser()
  const router = useRouter()

  const handleSignOut = () => {
    signOut().then(() => {
      router.replace('/')
    })
  }

  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Logo user={user} />
        {router.pathname !== '/profiles/manage' &&
          (user ? (
            <>
              <Navbar.Links>
                <Navbar.Link>TV Shows</Navbar.Link>
                <Navbar.Link>Movies</Navbar.Link>
              </Navbar.Links>
              <Search />
              <Navbar.Profile />
              {/* <Link href="#" passHref>
                <Navbar.Button>
                  <a onClick={handleSignOut}>Sign out</a>
                </Navbar.Button>
              </Link> */}
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
