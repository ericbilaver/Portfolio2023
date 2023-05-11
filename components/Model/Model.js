import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Model({ url, ...props }) {
  const group = useRef();
  useFrame((state) => {
    group.current.children.forEach((child, index) => {
      child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 25;
      child.rotation.x +=
        (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 1000;
      child.rotation.y +=
        (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 1000;
      child.rotation.z +=
        (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000;
    });
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh scale={(15, 15, 15)}>
        <boxGeometry />
        <meshBasicMaterial
          attach="material-0"
          color="#FFFFFF"
          wireframe={true}
        />
        <meshBasicMaterial
          attach="material-1"
          color="#FFFFFF"
          wireframe={true}
        />
        <meshBasicMaterial
          attach="material-2"
          color="#FFFFFF"
          wireframe={true}
        />
        <meshBasicMaterial
          attach="material-3"
          color="#FFFFFF"
          wireframe={true}
        />

        <meshBasicMaterial attach="material-4" color="#2E67F8" />

        <meshBasicMaterial
          attach="material-5"
          color="#FFFFFF"
          wireframe={true}
        />
        <meshBasicMaterial
          attach="material-6"
          color="#FFFFFF"
          wireframe={true}
        />
      </mesh>
    </group>
  );
}
