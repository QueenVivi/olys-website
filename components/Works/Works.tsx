import Image from "next/image";
import logoBuildkite from "../../imgs/buildkit.jpg";
import logoEstimateone from "../../imgs/estimateone.jpg";
import logoQantas from "../../imgs/qantas.jpg";
import logoWorksafe from "../../imgs/worksafe.jpg";

export default function Works() {
  return (
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
  );
}
