import styles from "./Eyebrow.module.scss";

export default function Eyebrow(props) {
  return (
    <h2>
      {props.eyebrow}{" "}
      <span className={`${styles.Eyebrow} fw-light`}>{props.heading}</span>
    </h2>
  );
}
