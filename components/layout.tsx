import Head from 'next/head'
import Footer from './footer'
import styles from './layout.module.css'
import Navbar from './navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Suryakant&apos;s Blog</title>
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </>
  )
}
export default Layout
