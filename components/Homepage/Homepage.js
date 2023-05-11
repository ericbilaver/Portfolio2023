import css from "./Homepage.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense, useEffect, useRef } from "react";
import Model from "../Model/Model";
import Link from "next/link";

/**
 * https://codesandbox.io/s/baked-ao-f5sgi
 */
let deviceOrient = { x: 0, y: 0 };
const handleMotion = (event) => {
  deviceOrient.x = event.beta / 180; // In degree in the range [-180,180) => [-1, 1]
  deviceOrient.y = event.gamma / 90; // In degree in the range [-90,90) => [-1, 1]
  console.log(event);
};

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

export default function Homepage({ speed, factor, url }) {
  useEffect(() => {
    window.addEventListener("deviceorientation", handleMotion);
  });

  function Rig({ children }) {
    const ref = useRef();
    useFrame((state) => {
      if (isTouchDevice()) {
        // mobile / touch
        const factorX = deviceOrient.x === null ? 0 : deviceOrient.x;
        const factorY = deviceOrient.y === null ? 0 : deviceOrient.y;

        ref.current.rotation.y = THREE.MathUtils.lerp(
          ref.current.rotation.y,
          (factorX * Math.PI) / 10,
          0.05
        );
        ref.current.rotation.x = THREE.MathUtils.lerp(
          ref.current.rotation.x,
          (factorY * Math.PI) / 10,
          0.05
        );
      } else {
        // desktop / no touch
        ref.current.rotation.y = THREE.MathUtils.lerp(
          ref.current.rotation.y,
          (state.mouse.x * Math.PI) / 10,
          0.05
        );
        ref.current.rotation.x = THREE.MathUtils.lerp(
          ref.current.rotation.x,
          (state.mouse.y * Math.PI) / 10,
          0.05
        );
      }
    });
    return <group ref={ref}>{children}</group>;
  }

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
      <div className={css.canvasDiv}>
        <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
          <pointLight position={[100, 100, 100]} intensity={0.8} />
          <hemisphereLight
            color="#ffffff"
            groundColor="#b9b9b9"
            position={[-7, 25, 13]}
            intensity={0.85}
          />
          <Suspense fallback={null}>
            <group position={[0, 0, 0]}>
              <Rig>
                <Model />
              </Rig>
            </group>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
