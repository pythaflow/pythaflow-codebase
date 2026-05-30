'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function Net({ count = 180, radius = 2.2 }) {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const points = useMemo(() => {
    const pts = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      pts.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
    }
    return pts;
  }, [count, radius]);

  const lines = useMemo(() => {
    const lns = [];
    const threshold = radius * 0.45;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < threshold) {
          lns.push([points[i], points[j]]);
        }
      }
    }
    return lns;
  }, [points, radius]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Base rotation
    const targetRotY = t * 0.1 + mouse.current.x * 0.8;
    const targetRotX = Math.sin(t * 0.05) * 0.2 - mouse.current.y * 0.8;
    
    // Smooth interpolation towards target
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#FF4D1C" />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <Line key={i} points={line} color="#FF4D1C" opacity={0.15} transparent lineWidth={1} />
      ))}
    </group>
  );
}

export default function CircleNet() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6, top: '60px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Net count={180} radius={2.0} />
      </Canvas>
    </div>
  );
}
