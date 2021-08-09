import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Suryakant&apos;s Blog</title>
      </Head>

      <Navbar />
      <style jsx>{`
        .main {
          width: 100%;
          max-width: var(--global-width);
          margin: 0 auto;
          text-align: center;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main > section {
          width: 80%;
          padding-bottom: 1rem;
          margin: 0 auto;
        }
      `}</style>

      <main className="main">{children}</main>

      <Footer />
    </>
  )
}
export default Layout
