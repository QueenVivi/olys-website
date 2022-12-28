import Eyebrow from "../Eyebrow";

export default function Hero(props) {
  return (
    <section>
      <div className="container py-8 py-sm-10">
        <Eyebrow eyebrow={props.eyebrow} heading={props.heading} />
        <p className="display-6 lh-lg text-white">{props.message}</p>
        {props.linkUrl && props.linkText ? (
          <p>
            <a href={props.linkUrl}>{props.linkText}</a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
