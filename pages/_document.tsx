import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
  }

  render() {
      const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
      return (
          <Html>
              <Head />
              <body className={pageProps.bodyClassName}>
                  <Main />
                  <NextScript />
              </body>
          </Html>
      );
  }
}
