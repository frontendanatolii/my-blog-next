import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>
          Tolik Petras web development blog
        </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
