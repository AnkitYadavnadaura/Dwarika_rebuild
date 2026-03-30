'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';

function Globe() {
  const mesh = useRef(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.x += delta * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 3]} />
        <meshStandardMaterial color="#4cc9ff" wireframe emissive="#5b5bff" emissiveIntensity={0.45} />
      </mesh>
    </Float>
  );
}

export default function NationScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }}>
      <color attach="background" args={['#050510']} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 2, 4]} intensity={1.2} color="#4cc9ff" />
      <pointLight position={[-4, -2, -4]} intensity={0.6} color="#7c5cff" />
      <Stars radius={35} depth={40} count={1200} factor={2} saturation={0} fade speed={0.4} />
      <Globe />
    </Canvas>
  );
}
