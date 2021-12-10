import FooterContainer from './containers/footer'
import HeaderContainer from './containers/header'

export default function Layout({ children }) {
  return (
    <>
      <HeaderContainer />
      <main>{children}</main>
      <FooterContainer />
    </>
  )
}
