import css from "./aboutme.module.scss";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className={css.aboutMe}>
      <Link className={css.link} href="/">
        Home
      </Link>
      <div className={css.aboutMe}></div>
    </div>
  );
}
