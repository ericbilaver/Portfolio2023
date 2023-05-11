import Image from "next/image";
import css from "./ProjectItem.module.scss";
import Link from "next/link";

export default function ProjectItem({ data, innerRef }) {
  return (
    <div className={css.projectItem} ref={innerRef}>
      <div className={css.eyebrowRow}>
        {data.link === "" ? null : (
          <div className={css.Image}>
            <Link href={data.link}>
              <Image src={data.logo} width="60" height="60" />
            </Link>
          </div>
        )}
        <div className={css.eyebrowText}>
          <h2>{data.title}</h2>
          <p>{data.dates}</p>
        </div>
      </div>

      <div className={css.accomplishments}>{data.desc.join("\n")}</div>
    </div>
  );
}
