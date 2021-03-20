import '@styles/globals.css'
import '@styles/style.scss'
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
