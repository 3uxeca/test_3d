import { PerspectiveCamera } from '@react-three/drei';
import { Euler } from 'three';

const CustomCamera = ({ cameraRef }: any) => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[400, 280, 360]}
        zoom={6} // 기본 줌 레벨
        near={1}
        far={10000}
        rotation={new Euler(-Math.PI / 2, -2, 0)}
        ref={cameraRef}
      />
    </>
  );
};

export default CustomCamera;
