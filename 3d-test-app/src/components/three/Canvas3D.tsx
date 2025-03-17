"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Loader, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef } from "react";
import CameraLogger from './CameraLogger';
import { Euler } from 'three';


const Canvas3D = () => {
  const cameraRef = useRef<any>();
  return (
    <>
      <Canvas camera={{ position: [0, 63, -123], fov: 45 }}>
        <Suspense fallback={"LOADING"}>
          <Scene />
        </Suspense>
        {/* <CameraLogger /> */}
        <OrbitControls
          target={[0, 66, 0]} // 타겟 위치 설정
        />
        <PerspectiveCamera 
          makeDefault
          position={[
            0, 360, -1600,
          ]} // 카메라 위치 설정
          zoom={10} // 기본 줌 레벨
          near={1}
          far={10000}
          // up={[0, 0, 1]} // 상단 뷰 유지를 위한 up 벡터 설정
          rotation={new Euler(-Math.PI / 2, -2, 0)}        
          ref={cameraRef}
        />
      </Canvas>
      <Loader />
    </>
  );
};

export default Canvas3D;
