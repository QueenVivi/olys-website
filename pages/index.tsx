import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Quotes from "../components/Quotes";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oly Su's Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Works />
        <Quotes />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
