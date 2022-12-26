export default function Hero(props) {
  return (
    <section>
      <div className="container">
        <h1>{props.eyebrow}</h1>
        <h2>{props.heading}</h2>
        <p>{props.message}</p>
        <p>
          <a href={props.linkUrl}>{props.linkText}</a>
        </p>
        {props.children}
      </div>
    </section>
  );
}
