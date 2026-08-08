import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NODE_POSITIONS = [
  [-2.8, 1.8, 0.4], [2.7, 1.5, -0.2], [-3.1, -1.3, -0.8],
  [3.2, -1.1, 0.5], [0.2, 2.8, -1.4], [-0.5, -2.6, 0.4],
];

const OrbitScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    // Unit-test DOMs do not provide a WebGL context. Keep the semantic page
    // testable while the CSS fallback supplies the visual treatment.
    if (navigator.userAgent.includes('jsdom')) {
      mount.dataset.webgl = 'unavailable';
      return undefined;
    }

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (error) {
      mount.dataset.webgl = 'unavailable';
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 11);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    scene.add(rig);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.45, 1),
      new THREE.MeshBasicMaterial({ color: 0x5eead4, wireframe: true, transparent: true, opacity: 0.34 })
    );
    rig.add(core);

    const innerCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.86, 2),
      new THREE.MeshBasicMaterial({ color: 0xe8ecf3, wireframe: true, transparent: true, opacity: 0.11 })
    );
    rig.add(innerCore);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.012, 6, 160),
      new THREE.MeshBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.5 })
    );
    ring.rotation.x = 1.12;
    ring.rotation.y = -0.2;
    rig.add(ring);

    const nodeGeometry = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x5eead4 });
    const positions = [];
    NODE_POSITIONS.forEach((point) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(...point);
      rig.add(node);
      positions.push(...point, 0, 0, 0);
    });

    const routes = new THREE.LineSegments(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)),
      new THREE.LineBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.18 })
    );
    rig.add(routes);

    const particlePositions = [];
    for (let i = 0; i < 130; i += 1) {
      const angle = i * 2.39996;
      const radius = 3.8 + (i % 17) * 0.17;
      particlePositions.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.7,
        ((i * 37) % 41) / 10 - 2
      );
    }
    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3)),
      new THREE.PointsMaterial({ color: 0xa9b4c6, size: 0.025, transparent: true, opacity: 0.4 })
    );
    rig.add(particles);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.34;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.24;
    };
    const onScroll = () => {
      rig.rotation.z = window.scrollY * 0.00016;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    resizeObserver?.observe(mount);
    if (!resizeObserver) window.addEventListener('resize', resize, { passive: true });

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();
      rig.rotation.y += (pointer.x - rig.rotation.y) * 0.035;
      rig.rotation.x += (-pointer.y - rig.rotation.x) * 0.035;
      if (!reducedMotion) {
        core.rotation.y = elapsed * 0.08;
        core.rotation.x = elapsed * 0.035;
        innerCore.rotation.y = -elapsed * 0.06;
        ring.rotation.z = elapsed * 0.025;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      if (!resizeObserver) window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      scene.traverse((object) => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
        else object.material?.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="orbit-scene" aria-hidden="true" />;
};

export default OrbitScene;
