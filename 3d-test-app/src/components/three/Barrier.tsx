import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type BarrierProps = {
  position: THREE.Vector3;
  rotation: THREE.Vector3;
  color: string;
};

const Barrier = (props: BarrierProps) => {
  const { position, rotation, color } = props;
  // const { scene: barrierScene } = useGLTF('/models/barrier/scene.gltf');
  // const { scene: barrierScene } = useGLTF('/models/velvet-rope/scene.gltf');
  const { scene: redBarrierScene } = useGLTF('/models/pinch-barrier-red-narrow.gltf');
  const redBarrierClonedScene = redBarrierScene.clone();
  const { scene: blueBarrierScene } = useGLTF('/models/pinch-barrier-blue-narrow.gltf');
  const blueBarrierClonedScene = blueBarrierScene.clone();
  return (
    <>
      {color && color === 'red' ? (
        <primitive
          object={redBarrierClonedScene}
          scale={3}
          position={[position.x, position.y, position.z]}
          rotation={[rotation?.x, rotation.y, rotation.z]}
        />
      ) : (
        <primitive
          object={blueBarrierClonedScene}
          scale={3}
          position={[position.x, position.y, position.z]}
          rotation={[rotation?.x, rotation.y, rotation.z]}
        />
      )}
    </>
  );
};

export default Barrier;
