const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;

    const particles = 1000;
    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2;
        positions[i * 3 + 1] = Math.random() * 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

        colors[i * 3] = 1;
        colors[i * 3 + 1] = (Math.random() * 0.5) + 0.5;
        colors[i * 3 + 2] = 0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });
    const fireParticles = new THREE.Points(geometry, material);

    scene.add(fireParticles);

    function animate() {
        requestAnimationFrame(animate);

        fireParticles.geometry.attributes.position.needsUpdate = true;

        const positions = fireParticles.geometry.attributes.position.array;

        for (let i = 0; i < particles; i++) {
            positions[i * 3 + 1] += 0.01;

            if (positions[i * 3 + 1] > 2) {
                positions[i * 3 + 1] = 0;
            }
        }

        renderer.render(scene, camera);
    }

    animate();
