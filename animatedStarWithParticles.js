const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const starGeometry = new THREE.IcosahedronGeometry(1, 0);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const star = new THREE.Mesh(starGeometry, starMaterial);

  scene.add(star);

  // Create particles around star
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0xffffff,
  });
  const particlePositions = [];
  for (let i = 0; i < 500; i++) {
    particlePositions.push((Math.random() - 0.5) * 10);
    particlePositions.push((Math.random() - 0.5) * 10);
    particlePositions.push((Math.random() - 0.5) * 10);
  }
  particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // Set camera position
  camera.position.z = 5;

  // Initialize variables for animation
  let xSpeed = 0.02;
  let ySpeed = 0.01;

  // Animation loop
  const animate = function () {
    requestAnimationFrame(animate);

    // Make star bounce
    star.position.x += xSpeed;
    star.position.y += ySpeed;

    if (star.position.x >= 2 || star.position.x <= -2) {
      xSpeed = -xSpeed;
    }

    if (star.position.y >= 2 || star.position.y <= -2) {
      ySpeed = -ySpeed;
    }

    // Rotate star
    star.rotation.x += 0.01;
    star.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
