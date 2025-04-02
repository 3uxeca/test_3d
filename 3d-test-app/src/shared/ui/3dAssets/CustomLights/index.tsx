'use client';
import { Environment } from '@react-three/drei';
import { useRef } from 'react';

const CustomLights = () => {
  const drectRef = useRef(null);
  return (
    <>
      <Environment preset={'forest'} />
      <directionalLight
        ref={drectRef}
        position={[0, 5, 5]}
        intensity={1.4}
        castShadow
      />
      <ambientLight intensity={1} color={'#ffffff'} />
    </>
  );
};

export default CustomLights;
