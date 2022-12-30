import Image from "next/image";
import Eyebrow from "../Eyebrow";

export default function Clients(props) {
  return (
    <section>
      <div className="container mb-10">
        <Eyebrow eyebrow="Clients" heading="worked with" />
        <div className="row" style={{ gap: "40px 20px" }}>
          {props.logosData.map((logo, i) => {
            return (
              <div
                className="col-6 col-sm-3 col-md-2"
                key={i}
                style={{ position: "relative", height: "50px" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
