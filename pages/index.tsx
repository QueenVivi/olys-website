import Head from "next/head";
import Image from "next/image";
import logoBuildkite from "../imgs/buildkit.jpg";
import logoEstimateone from "../imgs/estimateone.jpg";
import logoQantas from "../imgs/qantas.jpg";
import logoSilverstripe from "../imgs/silverstripe.jpg";
import logoWorksafe from "../imgs/worksafe.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oly Su's Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </Head>
      <header>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              Oly Su
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="container">
            <h1>Welcome to Oly's website</h1>
            <h2>What I do</h2>
            <p>
              ux, ui, visual design, research, strategy, education, design,
              branding, workshops and more...
            </p>
            <p>
              <a href="https://www.linkedin.com/in/olysu/">view full cv</a>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>work I've done</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <Image
                    src={logoBuildkite}
                    alt="logo of the tech company Buildkit"
                  />
                  <div className="card-body">
                    <h3>Improve how we navigate</h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <Image
                    src={logoWorksafe}
                    alt="logo of the tech company Worksafe"
                  />
                  <div className="card-body">
                    <h3>Improve how we navigate</h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <Image src={logoQantas} alt="logo of Qantas" />
                  <div className="card-body">
                    <h3>Improve how we navigate</h3>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <Image
                    src={logoEstimateone}
                    alt="logo of the tech company Estimate One"
                  />
                  <div className="card-body">
                    <h3>Improve how we navigate</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>People say</h2>
            <blockquote className="blockquote">
              <p>
                Oly is a true consummate professional and a seriously black-belt
                product designer. I had the absolute pleasure of managing Oly
                for over a year and I can wholeheartedly say that his departure
                has been a huge loss to our organisation…
              </p>
              <footer className="blockquote-footer">Cheb D</footer>
            </blockquote>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Clients worked with</h2>
            <ul className="list-unstyled d-flex flex-wrap">
              <li>
                <Image
                  className="img-fluid"
                  src={logoBuildkite}
                  alt="buildkite logo"
                />
              </li>
              <li>
                <Image
                  className="img-fluid"
                  src={logoWorksafe}
                  alt="worksafe logo"
                />
              </li>
              <li>
                <Image
                  className="img-fluid"
                  src={logoQantas}
                  alt="qantas logo"
                />
              </li>
              <li>
                <Image
                  className="img-fluid"
                  src={logoEstimateone}
                  alt="estimateone logo"
                />
              </li>
              <li>
                <Image
                  className="img-fluid"
                  src={logoSilverstripe}
                  alt="sliverstrip logo"
                />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Contact say hello</h2>
            <p>
              Have something you want to talk about? Need some design work done?
              Feel free to drop me a line and say hello!
            </p>
            <form>
              <div className="row g-3">
                <h3>name *</h3>
                <div className="col-md-6 mb-3">
                  <label className="form-label" for="first_name">
                    first name *
                  </label>
                  <input
                    className="form-control"
                    id="fist_name"
                    type="text"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" for="last_name">
                    last name *
                  </label>
                  <input
                    className="form-control"
                    id="las_name"
                    type="text"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" for="email">
                    email *
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" for="subject">
                    subject *
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="subject"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label" for="message">
                    message *
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    cols="50"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>all works are copyright Oly Su 2022</p>
        </div>
      </footer>
    </>
  );
}
