'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function RotatingGlobe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (globeRef.current) globeRef.current.rotation.y = t * 0.12
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.22
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.14
      ring2Ref.current.rotation.x = t * 0.06
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.09
      ring3Ref.current.rotation.y = t * 0.11
    }
  })

  const dotPositions: [number, number, number][] = [
    [1.25, 0.75, 0.65],
    [-0.5, 1.35, 0.75],
    [0.3, -0.95, 1.1],
    [1.05, 0.5, -1.0],
    [-1.1, -0.4, 1.0],
  ]

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
      {/* Main globe body */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#062a4a"
          emissive="#031a30"
          emissiveIntensity={0.5}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>

      {/* Wireframe overlay — gives the globe grid effect */}
      <mesh>
        <sphereGeometry args={[1.53, 18, 18]} />
        <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Orbital ring 1 — gold */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.8, 0.4, 0]}>
        <torusGeometry args={[2.15, 0.028, 16, 120]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.9}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Orbital ring 2 — teal */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4.5, Math.PI / 5, 0]}>
        <torusGeometry args={[2.5, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.7}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Orbital ring 3 — sky blue, faint */}
      <mesh ref={ring3Ref} rotation={[0.3, Math.PI / 3, Math.PI / 3.5]}>
        <torusGeometry args={[2.85, 0.01, 16, 120]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.4}
          metalness={1}
          roughness={0}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Location pin dots */}
      {dotPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={4} />
        </mesh>
      ))}
    </Float>
  )
}

export default function GlobeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 42 }} style={{ background: 'transparent' }} dpr={[1, 2]}>
      <ambientLight intensity={0.25} />
      <pointLight position={[6, 4, 6]} intensity={2.5} color="#f59e0b" />
      <pointLight position={[-6, -4, -4]} intensity={1} color="#2dd4bf" />
      <pointLight position={[0, 6, 0]} intensity={0.6} color="#ffffff" />

      <Stars radius={90} depth={70} count={4500} factor={3} saturation={0} fade speed={0.4} />
      <Sparkles count={35} size={2.5} speed={0.25} color="#f59e0b" scale={10} />

      <RotatingGlobe />
    </Canvas>
  )
}
