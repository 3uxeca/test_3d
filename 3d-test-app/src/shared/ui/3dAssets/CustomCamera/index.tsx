import { PerspectiveCamera } from '@react-three/drei';
import { forwardRef, MutableRefObject, Ref } from 'react';
import * as THREE from 'three';

interface CustomCameraProps {
  cameraRef: MutableRefObject<THREE.PerspectiveCamera | null>;
}

const CustomCamera = forwardRef(
  (CustomCameraProps, ref: Ref<THREE.PerspectiveCamera>) => {
    return (
      <PerspectiveCamera
        makeDefault
        position={[400, 280, 360]}
        zoom={6}
        near={1}
        far={10000}
        rotation={new THREE.Euler(-Math.PI / 2, -2, 0)}
        ref={ref}
      />
    );
  },
);

export default CustomCamera;
