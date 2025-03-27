'use client';
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Preload,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Euler } from 'three';

import Airport3D from './Airport3D';
import Lights from './Lights';

const AirportFootTraffic = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        <Suspense fallback={'LOADING'}>
          <Lights />
          <Airport3D />
          <Preload all />
        </Suspense>
        <OrbitControls
          target={[0, 0, 0]} // 타겟 위치 설정
          panSpeed={0.1}
        />
        <PerspectiveCamera
          makeDefault
          position={[400, 280, 360]}
          zoom={6} // 기본 줌 레벨
          near={1}
          far={10000}
          rotation={new Euler(-Math.PI / 2, -2, 0)}
          ref={cameraRef}
        />
      </Canvas>
      <Loader />
    </>
  );
};

export default AirportFootTraffic;
