import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={4.5} position-y={-5} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 15,
        near: 0.1,
        far: 200,

        position: [40, 20, -20],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Ambient light for overall brightness */}
        <ambientLight intensity={2} />

        {/* Main directional light (like sun) */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />

        {/* Fill light to reduce harsh shadows */}
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;