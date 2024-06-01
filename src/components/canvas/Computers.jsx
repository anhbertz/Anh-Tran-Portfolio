import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import { useAnimations } from '@react-three/drei';

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const { ref, mixer, names } = useAnimations(animations, scene);  // Attach animations to the scene

  useEffect(() => {
    if (mixer && names.length > 0) {
      mixer.clipAction(animations[0]).play();  // Play the first animation
    }
  }, [mixer, names]);
  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <spotLight
        position={isMobile ? [60, 45, 30] : [20, 45, 30]}
        angle={0.12}
        penumbra={1}
        intensity={10000}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 1.5 : 1.5}
        position={isMobile ? [-8, -6, -2.2] : [0, -3.5, -2]}
        rotation={[0, 0.3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableRotate={false} // Disable rotation
          enableZoom={false} // Disable zoom
          enablePan={false} // Disable panning
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;