'use client'

import { Bounds } from "@react-three/drei";
import Button3D from "./Button3D";
import Lights from "./Lights";
import Model3D from "./Model3D";
import Place3D from "./Place3D";
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Info3D from './Info3D';
import * as THREE from 'three';

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    console.log('CAMERA :: ', camera);
  }, [camera]);  
  return (
    <>
      <Lights />
      <Bounds observe>
        <Place3D />
        <Info3D position={new THREE.Vector3(80, 20, 100)} waitingTime={30} />
        <Info3D position={new THREE.Vector3(-90, 20, 180)} waitingTime={15} />
        <Info3D position={new THREE.Vector3(90, 20, 220)} waitingTime={5} />
        <Button3D />
        <Model3D />
      </Bounds>
    </>
  );
};
export default Scene;
