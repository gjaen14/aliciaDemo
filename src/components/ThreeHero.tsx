import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ count = 250 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return coords;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#028C8C"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + pointer.y * 0.2;
      meshRef.current.rotation.y = t * 0.2 + pointer.x * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.1;
      wireframeRef.current.rotation.y = -t * 0.15;
    }
  });

  return (
    <group position={[2.2, 0, 0]}>
      {/* Outer Distorted Sphere */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <Sphere ref={meshRef} args={[1.6, 64, 64]} scale={1.3}>
          <MeshDistortMaterial
            color="#055060"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
            opacity={0.85}
            transparent
          />
        </Sphere>
      </Float>

      {/* Wireframe Hologram Ring */}
      <Sphere ref={wireframeRef} args={[2.0, 24, 24]}>
        <meshBasicMaterial
          color="#E3B12B"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#EEA59E" />
        
        <FloatingGlobe />
        <Particles count={200} />
      </Canvas>
    </div>
  );
}
