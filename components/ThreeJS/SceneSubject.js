import * as THREE from "three";

export default (scene) => {
  const group = new THREE.Group();

  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const matWire = new THREE.MeshBasicMaterial({ wireframe: true });
  const matFace = new THREE.MeshBasicMaterial({
    color: "#2E67F8",
    side: THREE.DoubleSide,
  });
  const material = [matFace, matWire, matWire, matWire, matWire];

  const subjectMesh = new THREE.Mesh(geometry, material);
  scene.add(subjectMesh);

  // const subjectGeometry = new THREE.BoxGeometry(10, 10, 10);

  // const subjectMaterial = new THREE.MeshStandardMaterial({
  //   color: "#000",
  //   transparent: true,
  //   side: THREE.DoubleSide,
  //   alphaTest: 0.5,
  // });

  // const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

  // const subjectWireframe = new THREE.LineSegments(
  //   new THREE.EdgesGeometry(subjectGeometry),
  //   new THREE.LineBasicMaterial()
  // );

  // group.add(subjectMesh);
  // group.add(subjectWireframe);
  // scene.add(group);

  group.rotation.z = Math.PI / 4;

  const speed = 0.02;

  function update(time) {
    const angle = time * speed;

    group.rotation.y = angle;

    const scale = (Math.sin(angle * 8) + 6.4) / 5;
  }

  return {
    update,
  };
};
