// Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometryBlue = new THREE.BoxGeometry(5, 2.5, 1);
    const materialBlue = new THREE.MeshBasicMaterial({ color: 0x1E90FF });
    const cubeBlue = new THREE.Mesh(geometryBlue, materialBlue);
    cubeBlue.position.set(0, 1.25, 0);
    scene.add(cubeBlue);

    const geometryYellow = new THREE.BoxGeometry(5, 2.5, 1);
    const materialYellow = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
    const cubeYellow = new THREE.Mesh(geometryYellow, materialYellow);
    cubeYellow.position.set(0, -1.25, 0);
    scene.add(cubeYellow);

    camera.position.z = 10;

    
    function animate() {
        requestAnimationFrame(animate);

        // Rotation
        cubeBlue.rotation.x += 0.01;
        cubeBlue.rotation.y += 0.01;
        cubeYellow.rotation.x += 0.01;
        cubeYellow.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
