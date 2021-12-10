import Link from 'next/link'
import Footer from '@components/layout/footer'

export default function FooterContainer() {
  return (
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
  )
}
