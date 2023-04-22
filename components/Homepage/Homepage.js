import { OrbitControls } from "@react-three/drei";
import css from "./Homepage.module.scss";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

/**
 * https://codesandbox.io/s/baked-ao-f5sgi
 */

export default function Homepage({ speed, factor, url, ...props }) {
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
          <Link className={css.link} href="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className={css.canvasDiv}>
        <Canvas shadows camera={{ position: [5, 2, 10], fov: 50 }}>
          <OrbitControls makeDefault />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
