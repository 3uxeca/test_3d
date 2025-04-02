'use client';
import { Grid, useGLTF } from '@react-three/drei';
import Custom3dText from '../Custom3dText';
import * as THREE from 'three';
import { barrierData } from '@/entities/airportAssets/barrierData';
import TestBarrier from '../TestBarrier';
import TestGrid from '../TestGrid';

const TestAirport = () => {
  const { scene: airportScene } = useGLTF('/models/airport-foot-traffic.gltf');
  const airportClonedScene = airportScene.clone();

  const renderBarriers = (
    data: { pos: number[]; rotY: number; color: string }[],
  ) =>
    data.map(({ pos, rotY, color }, idx) => (
      <TestBarrier
        key={`${color}-${idx}`}
        position={new THREE.Vector3(...pos)}
        rotation={new THREE.Vector3(0, rotY, 0)}
        color={color}
      />
    ));

  return (
    <>
      <primitive object={airportClonedScene} scale={20} position={[0, 0, 0]} />
      {/* <axesHelper args={[100]} /> */}
      <gridHelper args={[120, 20, 0xff0000, '#f2f2f2']} />
      {/* <TestGrid /> */}
      <Custom3dText
        status={`원활`}
        delay={5}
        color="green1"
        position={[20, 0, 0]}
      />
      <Custom3dText
        status={`보통`}
        delay={10}
        color="yellow"
        position={[10, 0, 0]}
      />
      <Custom3dText
        status={`혼잡`}
        delay={15}
        color="red2"
        position={[0, 0, 0]}
      />

      <group name="입구 대기열 구분선">
        {renderBarriers(barrierData.entranceQueue)}
      </group>

      <group name="신분 검색대 대기열 구분선">
        {renderBarriers(barrierData.idCheckQueue)}
      </group>
    </>
  );
};

export default TestAirport;
