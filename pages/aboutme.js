import css from "./aboutme.module.scss";
import Link from "next/link";
import content from "../assets/content.json";

export default function AboutMe() {
  return (
    <div className={css.aboutMe}>
      <Link className={css.nameTitle} href="/">
        {content.aboutme.title}
      </Link>
      <div className={css.aboutMeContent}>
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
            <br />
            <a href="https://www.instagram.com/ericbilaver/">Instagram</a>
            <br />
            <a href="https://github.com/ericbilaver">GitHub</a>
            <br />
            <a href="">Resume</a>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
