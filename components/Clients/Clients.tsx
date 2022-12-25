import Image from "next/image";
import logoBuildkite from "../../public/imgs/buildkit.jpg";
import logoEstimateone from "../../public/imgs/estimateone.jpg";
import logoQantas from "../../public/imgs/qantas.jpg";
import logoSilverstripe from "../../public/imgs/silverstripe.jpg";
import logoWorksafe from "../../public/imgs/worksafe.jpg";

export default function Clients() {
  return (
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
            <Image className="img-fluid" src={logoQantas} alt="qantas logo" />
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
  );
}
