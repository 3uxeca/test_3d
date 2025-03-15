"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Canvas3D = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 80, 0], fov: 45 }}>
        <Suspense fallback={"LOADING"}>
          <Scene />
        </Suspense>
        <OrbitControls minZoom={5} maxZoom={10} />
      </Canvas>
      <Loader />
    </>
  );
};

export default Canvas3D;
