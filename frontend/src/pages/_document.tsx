import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  favIcon = 'https://www.pngrepo.com/png/24760/512/open.png';
  render() {
    return (
      <Html>
        <Head>
          <title>StayHome</title>
          <link rel="shortcut icon" href={this.favIcon} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
