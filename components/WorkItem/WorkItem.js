import Image from "next/image";
import css from "./WorkItem.module.scss";
import Link from "next/link";

export default function WorkItem({ data, videoPath, logoPath }) {
  return (
    <div className={css.workItem} style={{ background: data.color }}>
      <div className={css.eyebrowRow}>
        {data.link === "" ? null : (
          <div className={css.Image}>
            <Link href={data.link}>
              <Image src={data.logo} width="60" height="60" />
            </Link>
          </div>
        )}
        <div className={css.eyebrowText}>
          <h2>
            {data.title} - {data.company}
          </h2>
          <p>{data.location}</p>
        </div>
      </div>

      <div className={css.accomplishments}>{data.desc.join("\n")}</div>
    </div>
  );
}
