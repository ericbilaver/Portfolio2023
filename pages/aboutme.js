import css from "./aboutme.module.scss";
import Link from "next/link";
import content from "../assets/content.json";

export default function AboutMe() {
  return (
    <div className={css.aboutMe}>
      <Link className={css.link} href="/">
        Home
      </Link>
      <div className={css.aboutMe}>
        <div className={css.nameTitle}>{content.aboutme.title}</div>
        <div className={css.description}>{content.aboutme.description}</div>
        <div className={css.talents}>
          <div className={css.talent}>
            <div className={css.talentTitle}>
              {content.aboutme.lists[0].name}
            </div>
            {content.aboutme.lists[0].description}
          </div>
          <div className={css.talent}>
            <div className={css.talentTitle}>
              {content.aboutme.lists[1].name}
            </div>
            <a href="https://www.linkedin.com/in/ericbilaver/">LinkedIn</a>
            <a href="https://www.instagram.com/ericbilaver/">Instagram</a>
            <a href="https://github.com/ericbilaver">GitHub</a>
            <a href="">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
