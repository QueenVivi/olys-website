import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Quotes from "../components/Quotes";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Hero
        eyebrow="what"
        heading="i do"
        message="ux, ui, visual, research, strategy, education, design, branding, workshops and more"
        linkText="view full cv"
        linkUrl="https://linkedin.com/in/olysu"
      />
      <Works />
      <Quotes />
      <Clients />
      <ContactForm />
    </Layout>
  );
}
