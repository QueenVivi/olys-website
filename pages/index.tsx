import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Quotes from "../components/Quotes";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
      <Quotes />
      <Clients />
      <ContactForm />
    </Layout>
  );
}
