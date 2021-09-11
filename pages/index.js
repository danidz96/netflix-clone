import Head from 'next/head'
import Jumbotron from '@components/jumbotron'
import jumboData from '@fixtures/jumbo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix xlone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
      </main>

      <footer></footer>
    </div>
  )
}
