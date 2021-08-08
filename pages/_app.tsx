import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/reset.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
