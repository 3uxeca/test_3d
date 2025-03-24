import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Font3D from './Font3D';

const Airport3D = () => {
  const { raycaster } = useThree();
  const { scene: airportScene } = useGLTF('/models/airport-foot-traffic.gltf');
  const airportClonedScene = airportScene.clone();

  useEffect(() => {
    if(raycaster) {
      console.log(raycaster);
    }
  }, [raycaster]);
  return (
    <>
      <primitive object={airportClonedScene} scale={20} position={[0, 0, 0]} />
      <Font3D status={`원활`} delay={5} color='green1' position={[20, 0, 0]} />
      <Font3D status={`보통`} delay={10} color='yellow' position={[10, 0, 0]} />
      <Font3D status={`혼잡`} delay={15} color='red2' position={[0, 0, 0]} />
      {/* <Barrier position={new THREE.Vector3(0, 0, 100)} />
      <Barrier position={new THREE.Vector3(30, 0, 100)} />
      <Barrier position={new THREE.Vector3(40, 0, 100)} /> */}    
    </>
  )
}

export default Airport3D;