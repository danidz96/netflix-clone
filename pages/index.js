import Jumbotron from '@components/home/jumbotron'
import jumboData from '@fixtures/jumbo'
import faqsData from '@fixtures/faqs'
import Accordion from '@components/home/accordion'
import OptForm from '@components/home/opt-form'
import Feature from '@components/home/feature'
import HomepageBackground from '@components/home/homepageBackground'

export default function Home() {
  return (
    <>
      <HomepageBackground>
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
      </HomepageBackground>
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
    </>
  )
}
