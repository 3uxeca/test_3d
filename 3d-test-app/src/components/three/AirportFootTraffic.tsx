'use client'
import { Loader, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Euler } from 'three';
import * as THREE from 'three';
import Lights from './Lights';
import Barrier from './Barrier';
import Airport3D from './Airport3D';

const AirportFootTraffic = () => {

  const cameraRef = useRef<any>();

  return (
    <>
    <Canvas camera={{ position: [0, 0, 0], fov: 45 }}>
        <Suspense fallback={"LOADING"}>
          <Lights />
          <Airport3D />
        </Suspense>
        {/* <CameraLogger /> */}
        <OrbitControls
          target={[0, 0, 0]} // 타겟 위치 설정
          panSpeed={0.1}
        />
        <PerspectiveCamera
          makeDefault
          // position={[
          //   0, 360, -1600,
          // ]} // 카메라 위치 설정
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
  )  
}

export default AirportFootTraffic;