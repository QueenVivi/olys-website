import Image from "next/image";
import Eyebrow from "../Eyebrow";
import styles from "./WorkTiles.module.scss";

export default function WorkTiles(props) {
  return (
    <section>
      <div className="container">
        <Eyebrow eyebrow="Work" heading="I've done" />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {props.worksData.map((work, i) => {
            return (
              <div className="col" key={i}>
                <div
                  className={styles.WorkTile}
                  style={{
                    backgroundColor: work.brandColor,
                  }}
                >
                  <Image
                    className={styles.WorkTile__image}
                    src={work.logo}
                    alt={work.title}
                    fill
                  />

                  <div className={styles.WorkTile__eyebrow}>
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
