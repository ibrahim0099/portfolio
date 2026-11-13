import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { projects } from "../data";

function Core() {
  const wire = useRef<THREE.Mesh>(null!);
  const group = useRef<THREE.Group>(null!);
  const size = useThree((s) => s.size);
  useFrame((s, d) => {
    wire.current.rotation.y += d * 0.15;
    wire.current.rotation.x += d * 0.07;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, s.pointer.x * 0.6, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -s.pointer.y * 0.4, 0.05);
  });
  return (
    <group ref={group} scale={size.width < 640 ? 0.62 : size.width < 900 ? 0.75 : 0.95}>
      <Float speed={1.6} floatIntensity={0.6}>
        <mesh>
          <sphereGeometry args={[1.15, 64, 64]} />
          <MeshDistortMaterial color="#6d5bff" emissive="#3b2bd1" emissiveIntensity={0.7} distort={0.45} speed={2} roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh ref={wire}>
          <icosahedronGeometry args={[1.65, 2]} />
          <meshBasicMaterial color="#5eead4" wireframe transparent opacity={0.35} />
        </mesh>
      </Float>
      <Orbit />
    </group>
  );
}

function Orbit() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, d) => (ref.current.rotation.y += d * 0.3));
  return (
    <group ref={ref} rotation={[0.35, 0, 0.15]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.7, 0.006, 8, 160]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.5} />
      </mesh>
      {projects.map((p, i) => {
        const a = (i / projects.length) * Math.PI * 2;
        return (
          <group key={p.name} position={[Math.cos(a) * 2.7, 0, Math.sin(a) * 2.7]}>
            <mesh>
              <octahedronGeometry args={[0.16]} />
              <meshStandardMaterial color={p.color} emissive={p.color} emissiveIntensity={1.4} />
            </mesh>
            <Html center distanceFactor={9} style={{ pointerEvents: "none" }}>
              <span className="font-mono text-[11px] whitespace-nowrap translate-y-5 block px-2 py-0.5 rounded glass" style={{ color: p.color }}>
                {p.name}
              </span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 4, 5]} intensity={60} color="#5eead4" />
      <pointLight position={[-5, -3, 3]} intensity={50} color="#a78bfa" />
      <Stars radius={60} depth={50} count={2500} factor={3} fade speed={0.6} />
      <Core />
    </Canvas>
  );
}
