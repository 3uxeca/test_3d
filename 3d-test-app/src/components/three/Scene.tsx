'use client'

import { Bounds } from "@react-three/drei";
import Button3D from "./Button3D";
import Lights from "./Lights";
import Model3D from "./Model3D";
import Place3D from "./Place3D";
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';

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
        <Button3D />
        <Model3D />
      </Bounds>
    </>
  );
};
export default Scene;
