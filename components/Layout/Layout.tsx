import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Oly Su's Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Hind:wght@300;700&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Hind:wght@300;700&family=Libre+Baskerville&display=swap');
        </style>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
