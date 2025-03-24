import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type BarrierProps = {
  position: THREE.Vector3;
}

const Barrier = (props:BarrierProps) => {
  const { position } = props;
  // const { scene: barrierScene } = useGLTF('/models/barrier/scene.gltf');
  const { scene: barrierScene } = useGLTF('/models/velvet-rope/scene.gltf');
  const barrierClonedScene = barrierScene.clone();  
  return (
    <>
    <primitive object={barrierClonedScene} scale={10} position={[position.x, position.y, position.z]} />
    </>
  )
}

export default Barrier;