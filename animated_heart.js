// setup
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 20;
    const x = 0, y = 0;

    // draw shape
    const heartShape = new THREE.Shape();
    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
    const extrudeSettings = {
        steps: 2,
        depth: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 1
    };
    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    geometry.center();
    const material = new THREE.MeshPhongMaterial( { color: 0xe45858 } );
    const mesh = new THREE.Mesh( geometry, material );

    // rotate the mesh by 180 degrees around the X-axis
    mesh.rotation.x = Math.PI;

    // set the initial scale to 85%
    mesh.scale.set(0.85, 0.85, 0.85);

    scene.add( mesh );

    // add light
    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // animation parameters
    const scaleMultiplier = 0.2;
    const animationSpeed = 2.0;

    // render loop
    function animate() {
        requestAnimationFrame(animate);

        // update the scale to create a 'breathing' effect
        const scale = 0.85 + 0.85 * scaleMultiplier * Math.sin(animationSpeed * Date.now() / 1000);
        mesh.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
    }
    animate();
