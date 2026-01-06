let scene, camera, renderer, model;

function open3D() {
  document.getElementById("modal").style.display = "block";

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("threeCanvas"),
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load("models/burger.glb", (gltf) => {
    model = gltf.scene;
    scene.add(model);
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  renderer.dispose();
}
