import { Shadow, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import Font3D from './Font3D';
import Barrier from './Barrier';
import * as THREE from 'three';
import { barrierData } from '@/entities/airportAssets/barrierData';

const Airport3D = () => {
  const { raycaster } = useThree();
  const { scene: airportScene } = useGLTF('/models/airport-foot-traffic.gltf');
  const airportClonedScene = airportScene.clone();

  useEffect(() => {
    if (raycaster) {
      console.log(raycaster);
    }
  }, [raycaster]);

  const renderBarriers = (data: { pos: number[]; rotY: number; color: string }[]) =>
    data.map(({ pos, rotY, color }, idx) => (
      <Barrier
        key={`${color}-${idx}`}
        position={new THREE.Vector3(...pos)}
        rotation={new THREE.Vector3(0, rotY, 0)}
        color={color}
      />
    ));

  return (
    <>
      <primitive object={airportClonedScene} scale={20} position={[0, 0, 0]} />

      <Font3D status={`원활`} delay={5} color='green1' position={[20, 0, 0]} />
      <Font3D status={`보통`} delay={10} color='yellow' position={[10, 0, 0]} />
      <Font3D status={`혼잡`} delay={15} color='red2' position={[0, 0, 0]} />

      <group name='입구 대기열 구분선'>{renderBarriers(barrierData.entranceQueue)}</group>

      <group name='신분 검색대 대기열 구분선'>{renderBarriers(barrierData.idCheckQueue)}</group>
    </>
  );
};

export default Airport3D;
