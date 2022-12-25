import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Oly Su's Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
