import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class BlogDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Blog" />
        </Head>

        <body className="solarised-dark">
          <Main></Main>
          <NextScript />
          <style
            dangerouslySetInnerHTML={{
              __html: `</style>
                <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                  media="print"
                  onload="this.media='all';"
                />
              <style>`,
            }}
          ></style>
        </body>
      </Html>
    )
  }
}
