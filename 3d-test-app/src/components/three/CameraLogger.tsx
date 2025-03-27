import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const CameraLogger = () => {
  const { camera } = useThree();

  return (
    <OrbitControls
      onChange={() => {
        console.log('Camera Position:', camera.position);
        console.log('Camera Rotation:', camera.rotation);
      }}
    />
  );
};

export default CameraLogger;
