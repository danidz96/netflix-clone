import Head from 'next/head'
import Link from 'next/link'
import Jumbotron from '@components/jumbotron'
import jumboData from '@fixtures/jumbo'
import faqsData from '@fixtures/faqs'
import Footer from '@components/footer'
import Accordion from '@components/accordion'
import OptForm from '@components/opt-form'
import Header from '@components/header'
import Feature from '@components/feature'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix xlone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <Header.Container>
            <Header.Logo />
            <Header.Button>
              <Link href="/signin">
                <a aria-label="Sign in">Sign In</a>
              </Link>
            </Header.Button>
          </Header.Container>
          <Feature>
            <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            <OptForm>
              <OptForm.Title>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Title>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button type="submit">Get Started</OptForm.Button>
            </OptForm>
          </Feature>
          <Jumbotron.Container>
            {jumboData.map((item) => (
              <Jumbotron key={item.id}>
                <Jumbotron.Pane>
                  <Jumbotron.Title>{item.title}</Jumbotron.Title>
                  <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                  <Jumbotron.Image src={item.image} alt={item.alt} />
                </Jumbotron.Pane>
              </Jumbotron>
            ))}
          </Jumbotron.Container>
          <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Content>
              {faqsData.map((faq) => (
                <Accordion.Item key={faq.id}>
                  <Accordion.Header>{faq.header}</Accordion.Header>
                  <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion.Content>
            <OptForm>
              <OptForm.Title>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Title>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button type="submit">Get Started</OptForm.Button>
            </OptForm>
          </Accordion>
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
        </Header>
      </main>

      <footer></footer>
    </div>
  )
}
