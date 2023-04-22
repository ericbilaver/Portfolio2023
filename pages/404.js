import css from "./404.module.scss";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={css.main404}>
      <h1>_ 404 _</h1>
      <p>Start headin' home, you're lost</p>
      <Link className={css.link} href="/">
        ← Go Back
      </Link>
    </div>
  );
}
