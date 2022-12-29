import Image from "next/image";
import Eyebrow from "../Eyebrow";

export default function Works(props) {
  return (
    <section>
      <div className="container">
        <Eyebrow eyebrow="Work" heading="I've done" />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {props.worksData.map((work, i) => {
            return (
              <div className="col" key={i}>
                <div className="card">
                  <Image
                    src={work.logo}
                    alt={work.title}
                    width="300"
                    height="50"
                  />
                  <div className="card-body">
                    <Eyebrow eyebrow={work.challenge.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
