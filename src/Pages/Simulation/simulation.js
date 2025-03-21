import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import "./simulation.css";

function ArtemisModel() {
  const { scene } = useGLTF("/artemis.glb");
  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} />;
}

function ArtemisPath({ curve }) {
  const artemisRef = useRef();
  const time = useRef(0);

  useFrame(() => {
    if (artemisRef.current) {
      time.current += 0.00015;
      if (time.current > 1) time.current = 0;
      const pos = curve.getPointAt(time.current);
      artemisRef.current.position.set(pos.x, pos.y, pos.z);
    }
  });

  return (
    <group ref={artemisRef}>
      <Suspense fallback={null}>
        <ArtemisModel />
      </Suspense>
    </group>
  );
}

export default function ArtemisSimulation() {
  const [info, setInfo] = useState(null);

  const earthPos = new THREE.Vector3(-20, 0, 0);
  const moonPos = new THREE.Vector3(20, 0, 0);

  const curve = new THREE.QuadraticBezierCurve3(
    earthPos,
    new THREE.Vector3(0, 15, 0),
    moonPos
  );

  return (
    <Canvas camera={{ position: [0, 10, 60], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Sphere args={[1.2, 32, 32]} position={earthPos}>
        <meshStandardMaterial color="blue" />
      </Sphere>

      <Sphere args={[0.5, 32, 32]} position={moonPos}>
        <meshStandardMaterial color="gray" />
      </Sphere>

      <mesh>
        <tubeGeometry args={[curve, 100, 0.05, 8, false]} />
        <meshBasicMaterial color="white" />
      </mesh>

      <ArtemisPath curve={curve} />

      <OrbitControls />

      {info && (
        <Html>
          <div className="info-overlay">
            <p>{info}</p>
          </div>
        </Html>
      )}
    </Canvas>
  );
}