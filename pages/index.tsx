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
      <Hero
        eyebrow="people"
        heading="say"
        message="…Oly is a true consummate professional and a seriously black-belt
            product designer. I had the absolute pleasure of managing Oly for
            over a year and I can wholeheartedly say that his departure has been
            a huge loss to our organisation…"
        linkText="Cheb D"
        linkUrl="#"
      />
      <Clients />
      <ContactForm />
    </Layout>
  );
}
