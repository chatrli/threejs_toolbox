let scene, camera, renderer, cover, pages = [];

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const coverGeometry = new THREE.BoxGeometry(1, 1.5, 0.2);
const coverMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
cover = new THREE.Mesh(coverGeometry, coverMaterial);

const pageGeometry = new THREE.PlaneGeometry(0.98, 1.48, 1);
const pageMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });

for (let i = 0; i < 10; i++) {
  const page = new THREE.Mesh(pageGeometry, pageMaterial);
  page.position.z = -0.1 + (i * 0.01);
  pages.push(page);
  cover.add(page);
}

scene.add(cover);

let angle = 0;
function animate() {
  angle += 0.01;

  pages.forEach((page, i) => {
    page.rotation.y = Math.sin(angle + i * 0.1) * 0.5;
  });

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
