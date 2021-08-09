import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Suryakant&apos;s Blog</title>
      <link rel="icon" href="/sun_flare.ico" />
    </Head>

    <div>
      <h1 className="title">Welcome to Suryakant&apos;s blog</h1>

      <div className="grid">
        <a href="/notes" className="card">
          <h3>Notes &rarr;</h3>
          <p>My notes on various differnt topics</p>
        </a>

        <a href="/resume" className="card">
          <h3>Resume &rarr;</h3>
          <p>Find my resume here</p>
        </a>

        <a href="/interview-notes" className="card">
          <h3>Interview Notes &rarr;</h3>
          <p>
            These are basically questions that I have faced or asked in various
            interviews
          </p>
        </a>

        <a href="/demo-projects" className="card">
          <h3>Demo projects &rarr;</h3>
          <p>Small project for learning and demo purposes</p>
        </a>
      </div>
    </div>
  </div>
)

export default Home
