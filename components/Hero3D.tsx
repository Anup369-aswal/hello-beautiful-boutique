"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A quiet, elegant 3D signature element for the hero section: three
 * interleaved silk-ribbon forms (built from TorusKnotGeometry, which reads
 * as a flowing looped ribbon rather than a hard geometric shape) finished
 * in champagne gold, blush and wine, lit softly and rotating slowly.
 *
 * On mobile devices and when the visitor has requested reduced motion,
 * WebGL is skipped entirely in favour of a lightweight CSS fallback so the
 * hero stays fast on every device.
 */
export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [useWebGL, setUseWebGL] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.innerWidth < 768;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    setUseWebGL(!prefersReducedMotion && !isSmallScreen && hasFinePointer);
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!useWebGL || !containerRef.current) return;

    let renderer: import("three").WebGLRenderer | undefined;
    let frameId = 0;
    let disposed = false;

    (async () => {
      const THREE = await import("three");
      if (disposed || !containerRef.current) return;

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
      camera.position.set(0, 0, 9);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Soft, warm lighting — no harsh highlights.
      const key = new THREE.PointLight(0xf4e2c0, 2.4, 30);
      key.position.set(4, 4, 6);
      scene.add(key);

      const fill = new THREE.PointLight(0xf1dadd, 1.4, 30);
      fill.position.set(-5, -2, 4);
      scene.add(fill);

      const ambient = new THREE.AmbientLight(0xfbf6ee, 0.7);
      scene.add(ambient);

      const group = new THREE.Group();
      scene.add(group);

      const ribbonSpecs = [
        { color: 0xc9a664, scale: 1.55, radius: 2.1, tube: 0.16, p: 2, q: 3, opacity: 0.85 },
        { color: 0xf1dadd, scale: 1.15, radius: 1.7, tube: 0.11, p: 3, q: 2, opacity: 0.75 },
        { color: 0x5c1a34, scale: 0.85, radius: 1.3, tube: 0.07, p: 2, q: 5, opacity: 0.55 }
      ];

      const meshes = ribbonSpecs.map((spec, i) => {
        const geometry = new THREE.TorusKnotGeometry(spec.radius, spec.tube, 180, 24, spec.p, spec.q);
        const material = new THREE.MeshPhysicalMaterial({
          color: spec.color,
          roughness: 0.35,
          metalness: 0.15,
          clearcoat: 0.4,
          clearcoatRoughness: 0.6,
          transparent: true,
          opacity: spec.opacity
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.setScalar(spec.scale * 0.6);
        mesh.rotation.set(i * 0.6, i * 0.9, 0);
        group.add(mesh);
        return mesh;
      });

      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;

      const handlePointerMove = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        targetRotY = x * 0.5;
        targetRotX = y * 0.35;
      };
      container.addEventListener("pointermove", handlePointerMove);

      const clock = new THREE.Clock();

      const animate = () => {
        const elapsed = clock.getElapsedTime();

        currentRotX += (targetRotX - currentRotX) * 0.04;
        currentRotY += (targetRotY - currentRotY) * 0.04;

        group.rotation.x = currentRotX + Math.sin(elapsed * 0.15) * 0.08;
        group.rotation.y = elapsed * 0.09 + currentRotY;

        meshes.forEach((mesh, i) => {
          mesh.rotation.z = elapsed * (0.05 + i * 0.02);
          mesh.position.y = Math.sin(elapsed * 0.4 + i * 2) * 0.15;
        });

        renderer?.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        container.removeEventListener("pointermove", handlePointerMove);
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, [useWebGL]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-lg"
      aria-hidden="true"
    >
      {(!useWebGL || !checked) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/40 via-blush/50 to-wine/20 blur-2xl" />
            <div className="absolute inset-8 animate-petal rounded-[45%] border border-gold/50 bg-ivory/40" />
            <div
              className="absolute inset-12 rounded-[45%] border border-blush bg-blush/30"
              style={{ animation: "petal 7s ease-in-out infinite", animationDelay: "1.2s" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
