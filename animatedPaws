let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Create single paw object 
    function createPawPadObject() {
        let group = new THREE.Group();

        function createPawPad(x, y, z, radius) {
            let geometry = new THREE.SphereGeometry(radius, 32, 32);
            let material = new THREE.MeshBasicMaterial({ color: 0xFF69B4 });
            let sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(x, y, z);
            group.add(sphere);
        }

        createPawPad(-1, 0.5, 0, 0.5); // Left
        createPawPad(1, 0.5, 0, 0.5);  // Right
        createPawPad(0, 1, 0, 0.5);    // Top
        createPawPad(0, -1.5, 0, 0.8); // Bottom

        // Scaling down the entire group
        group.scale.set(0.2, 0.2, 0.2);
        return group;
    }

    // Create multiple paw pad objects
    let pawPads = [];
    for (let i = 0; i < 50; i++) {
        let pawPad = createPawPadObject();
        pawPad.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
        scene.add(pawPad);
        pawPads.push(pawPad);
    }

    camera.position.z = 10;
    
    let animate = function () {
        requestAnimationFrame(animate);

        pawPads.forEach(pawPad => {
            // Randomly appear and disappear
            if (Math.random() < 0.01) {
                pawPad.visible = !pawPad.visible;
            }
        });

        renderer.render(scene, camera);
    };

    animate();
