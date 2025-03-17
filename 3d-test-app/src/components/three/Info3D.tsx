import { Html, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type InfoButtonProps = {
  position: THREE.Vector3;
  waitingTime: number;
}

const Info3D = (props:InfoButtonProps) => {
  const { position, waitingTime } = props;
  const { scene, animations } = useGLTF("/models/InfoButton.glb");
  const infoRef = useRef<THREE.Group>(null);
  console.log('InfoButton.glb scene :: ', scene);
  console.log('InfoButton.glb ref :: ', infoRef.current);

  const clonedScene = scene.clone();

  useFrame((_, delta) => {
    if(infoRef.current) {
      infoRef.current.rotation.y += delta;
    }
  });  

  useEffect(() => {
    const color = '#ff0000'
    // clonedScene.traverse((object) => {
    //   if (object.isMesh) {
    //     object.material = object.material.clone(); // 개별 인스턴스를 위한 material 복제
    //     object.material.color.set(color); // 새로운 색상 적용
    //   }
    // });
  }, []); // color 변경 시 다시 적용  

  return (
    <>
    <primitive ref={infoRef} object={clonedScene} scale={40} position={[position.x, position.y, position.z]} />
    <Html position={[position.x+5, position.y+20, position.z]}>
      <div className='w-[10vw] font-bold'>{waitingTime}분</div>
    </Html>
    </>
  )
}

export default Info3D;