import css from "./WorkItem.module.scss";

export default function WorkItem({ data }) {
  return (
    <div className={css.workItem}>
      <h1 className={css.title}>{data.title}</h1>
      <h3 className={css.company}>{data.company}</h3>
    </div>
  );
}
