import css from "./projects.module.scss";
import content from "../assets/content.json";
import Link from "next/link";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Projects() {
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  useEffect(() => {
    gsap.from(ref0.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref0.current,
        start: "top bottom",
      },
    });
    gsap.from(ref1.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref1.current,
        start: "top bottom",
      },
    });
    gsap.from(ref2.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref2.current,
        start: "top bottom",
      },
    });
    gsap.from(ref3.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref3.current,
        start: "top bottom",
      },
    });
    gsap.from(ref4.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref4.current,
        start: "top bottom",
      },
    });
    gsap.from(ref5.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref5.current,
        start: "top bottom",
      },
    });
    gsap.from(ref6.current, {
      ease: "easeTwo",
      y: 40,
      opacity: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ref6.current,
        start: "top bottom",
      },
    });
  });

  return (
    <div className={css.projects}>
      <div className={css.header}>
        <Link className={css.link} href="/">
          Home
        </Link>
      </div>
      <div className={css.projectList}>
        <ProjectItem data={content.projects[0]} innerRef={ref0} />
        <ProjectItem data={content.projects[1]} innerRef={ref1} />
        <ProjectItem data={content.projects[2]} innerRef={ref2} />
        <ProjectItem data={content.projects[3]} innerRef={ref3} />
        <ProjectItem data={content.projects[4]} innerRef={ref4} />
        <ProjectItem data={content.projects[5]} innerRef={ref5} />
        <ProjectItem data={content.projects[6]} innerRef={ref6} />
      </div>
    </div>
  );
}
