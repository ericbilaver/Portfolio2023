import css from "./Homepage.module.scss";
import { useEffect, useRef } from "react";
import Link from "next/link";
import threeEntryPoint from "../ThreeJS/threeEntryPoint";

/**
 * https://codesandbox.io/s/baked-ao-f5sgi
 */

export default function Homepage() {
  let canvasRef = useRef();
  useEffect(() => {
    threeEntryPoint(canvasRef.current);
  }, []);

  return (
    <div className={css.homepageMain}>
      <div className={css.routes}>
        <div className={css.aboutMe}>
          <Link className={css.link} href="/aboutme">
            About Me
          </Link>
        </div>
        <div className={css.work}>
          <Link className={css.link} href="/work">
            Work
          </Link>
        </div>
        <div className={css.projects}>
          <Link className={css.link} href="/projects">
            Projects
          </Link>
        </div>
        <div className={css.contact}>
          <Link className={css.link} href="mailto:ericbilaver@gmail.com">
            Contact
          </Link>
        </div>
      </div>
      <div className={css.canvasDiv} ref={canvasRef}></div>
    </div>
  );
}
