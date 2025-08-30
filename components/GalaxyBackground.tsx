"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function createFallingParticles(num = 150, width = 800, height = 400) {
  const positions = [];
  for (let i = 0; i < num; i++) {
    const x = (Math.random() - 0.5) * width; // Wider spread
    const y = Math.random() * height;
    const z = (Math.random() - 0.5) * 10;
    positions.push(x, y, z);
  }
  return new Float32Array(positions);
}

const FallingParticles = () => {
  const points = useMemo(() => createFallingParticles(150, 800, 400), []);
  const velocities = useMemo(() => Array.from({ length: 150 }, () => Math.random() * 0.5 + 0.2), []);
  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 150; i++) {
        positions[i * 3 + 1] -= velocities[i];
        if (positions[i * 3 + 1] < -200) {
          positions[i * 3 + 1] = 200;
          positions[i * 3] = (Math.random() - 0.5) * 800;
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  return (
    <Points ref={ref} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#fff"
        size={1.2}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const GalaxyBackground = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        pointerEvents: "none",
        background: "transparent",
      }}
      camera={{ position: [0, 0, 200], fov: 75 }}
    >
      <FallingParticles />
    </Canvas>
  );
};

export default GalaxyBackground;
