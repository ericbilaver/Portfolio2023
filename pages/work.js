import css from "./work.module.scss";
import content from "../assets/content.json";
import Link from "next/link";
import WorkItem from "../components/WorkItem/WorkItem";

export default function Work() {
  // convert work JSON to mapping
  //   const displayWork = content.work.map((workItem) => {
  //     <WorkItem data={workItem}>
  //   });

  return (
    <div className={css.work}>
      <div className={css.header}>
        <Link className={css.link} href="/">
          Home
        </Link>
      </div>
      <div className={css.workList}>
        {content.work.map((e) => {
          return <WorkItem data={e} />;
        })}
      </div>
    </div>
  );
}
