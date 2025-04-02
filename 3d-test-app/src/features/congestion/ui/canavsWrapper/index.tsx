'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

import * as THREE from 'three';

import CustomCamera from '@/shared/ui/3dAssets/CustomCamera';
import CustomLights from '@/shared/ui/3dAssets/CustomLights';
import { Loader, OrbitControls } from '@react-three/drei';
import TestAirport from '@/shared/ui/3dAssets/TestAirport';

const CanvasWrapper = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  return (
    <>
      <Canvas
        className="h-full w-full"
        fallback={<div>WebGL 렌더링에 실패하였습니다.</div>}
        onCreated={(state) => {
          state.gl.setClearColor('#F2F2F2');
        }}
      >
        <Suspense fallback={'LOADING'}>
          <CustomLights />
          <TestAirport />
        </Suspense>
        <OrbitControls target={[0, 0, 0]} panSpeed={0.1} />
        <CustomCamera ref={cameraRef} />
      </Canvas>
      <Loader />
    </>
  );
};

export default CanvasWrapper;
