import 'tailwindcss/tailwind.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import type { VFC } from 'react'

const description =
  'Chat StylesはYouTube Liveのチャットの見た目を変更するCSSを生成するためのツールです。OBS StudioのブラウザソースのカスタムCSSとして使われることを前提としています。'

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        defaultTitle="Chat Styles"
        description={description}
        openGraph={{
          images: [
            {
              height: 192,
              url: '/favicon-192x192.png',
              width: 192
            }
          ],
          type: 'website'
        }}
        titleTemplate="%s - Chat Styles"
        twitter={{
          cardType: 'summary'
        }}
      />

      <Head>
        <link href="/manifest.json" rel="manifest" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
