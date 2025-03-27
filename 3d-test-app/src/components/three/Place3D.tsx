import { Box } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { useMainStore } from '@/store/useMainStore';

const Place3D = () => {
  const finishRef = useRef<THREE.Mesh>(null);
  const { isFinished, isReset } = useMainStore();
  const WAIT_OPACITY = 0.2;

  useEffect(() => {
    if (isReset) console.log('Place3D isReset :: ', isReset);
    console.log('Place3D isFinished :: ', isFinished);
  }, [isFinished, isReset]);
  return (
    <>
      <Box position={[0, 50, 150]} args={[300, 100, 400]}>
        <meshStandardMaterial color={'#fbfbfb'} side={THREE.BackSide} />
      </Box>
      <mesh ref={finishRef} position={[0, 1, 345]}>
        <boxGeometry args={[300, 3, 10]} />
        <meshStandardMaterial
          color={isFinished ? '#00ff00' : '#ff0000'}
          side={THREE.DoubleSide}
        />
      </mesh>
      <group name="wait_area">
        <mesh position={[-20, 1, 70]}>
          <boxGeometry args={[2, 20, 140]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[20, 1, 50]}>
          <boxGeometry args={[2, 20, 100]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[44, 1, 100]}>
          <boxGeometry args={[50, 20, 2]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[68, 1, 160]}>
          <boxGeometry args={[2, 20, 120]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[18, 1, 220]}>
          <boxGeometry args={[100, 20, 2]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[4, 1, 140]}>
          <boxGeometry args={[50, 20, 2]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[30, 1, 159]}>
          <boxGeometry args={[2, 20, 40]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[-23, 1, 180]}>
          <boxGeometry args={[108, 20, 2]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[-76, 1, 238]}>
          <boxGeometry args={[2, 20, 114]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[-32, 1, 234]}>
          <boxGeometry args={[2, 20, 30]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[22, 1, 248]}>
          <boxGeometry args={[108, 20, 2]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[-26, 1, 295]}>
          <boxGeometry args={[100, 20, 2]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[75, 1, 290]}>
          <boxGeometry args={[2, 20, 85]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
        <mesh position={[23, 1, 314]}>
          <boxGeometry args={[2, 20, 40]} />
          <meshStandardMaterial
            color={'#dbdbdb'}
            side={THREE.DoubleSide}
            transparent
            opacity={WAIT_OPACITY}
          />
        </mesh>
      </group>
    </>
  );
};

export default Place3D;
