import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import "./simulation.css";

function ArtemisModel() {
  const { scene } = useGLTF("/artemis.glb");
  return <primitive object={scene} scale={[0.05, 0.05, 0.05]} />;
}

function ArtemisPath({ curve, setTelemetry }) {
  const artemisRef = useRef();
  const progress = useRef(0);

  useFrame(() => {
    if (artemisRef.current) {
      progress.current += 0.00015;
      if (progress.current > 1) progress.current = 0;

      const pos = curve.getPointAt(progress.current);
      artemisRef.current.position.set(pos.x, pos.y, pos.z);

      // Calculate telemetry
      const totalDistance = 384400; // km
      const traveled = progress.current * totalDistance;
      const remaining = totalDistance - traveled;
      const missionDays = (progress.current * 25.5).toFixed(1); // scaled

      setTelemetry({
        day: missionDays,
        distance: Math.floor(remaining).toLocaleString(),
        percent: Math.floor(progress.current * 100),
      });
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
  const [telemetry, setTelemetry] = useState({ day: 0, distance: 384400, percent: 0 });

  const earthPos = new THREE.Vector3(-20, 0, 0);
  const moonPos = new THREE.Vector3(20, 0, 0);

  const curve = new THREE.QuadraticBezierCurve3(
    earthPos,
    new THREE.Vector3(0, 15, 0),
    moonPos
  );

  return (
    <div className="simulation-container">
      <div className="telemetry-panel">
        <h2>🚀 Artemis I Mission</h2>
        <p><strong>Mission Day:</strong> {telemetry.day} / 25.5</p>
        <p><strong>Distance Remaining:</strong> {telemetry.distance} km</p>
        <p><strong>Progress:</strong> {telemetry.percent}%</p>
      </div>

      <Canvas camera={{ position: [0, 10, 60], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Earth */}
        <Sphere args={[1.2, 32, 32]} position={earthPos}>
          <meshStandardMaterial color="blue" />
        </Sphere>

        {/* Moon */}
        <Sphere args={[0.5, 32, 32]} position={moonPos}>
          <meshStandardMaterial color="gray" />
        </Sphere>

        {/* Trajectory */}
        <mesh>
          <tubeGeometry args={[curve, 100, 0.05, 8, false]} />
          <meshBasicMaterial color="white" />
        </mesh>

        <ArtemisPath curve={curve} setTelemetry={setTelemetry} />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
