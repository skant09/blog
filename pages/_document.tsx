import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class EcommerceDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Blog" />
          {/* <link rel="stylesheet" type="text/css" href="https://cdn.zivame.com/public/build/main_css.211c5781d10db81842c4.css" media="all" onLoad="this.media='all'"></link> */}
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}
