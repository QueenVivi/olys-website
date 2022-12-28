import Eyebrow from "../Eyebrow";

export default function Quotes() {
  return (
    <section>
      <div className="container">
        <Eyebrow eyebrow="people" heading="say" />
        <blockquote className="blockquote">
          <p>
            Oly is a true consummate professional and a seriously black-belt
            product designer. I had the absolute pleasure of managing Oly for
            over a year and I can wholeheartedly say that his departure has been
            a huge loss to our organisation…
          </p>
          <footer className="blockquote-footer">Cheb D</footer>
        </blockquote>
      </div>
    </section>
  );
}
