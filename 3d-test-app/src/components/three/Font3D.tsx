import * as THREE from 'three';
import {
  Billboard,
  Center,
  CycleRaycast,
  Float,
  Helper,
  ScreenSpace,
  Text3D,
  useCursor,
  useMatcapTexture,
} from '@react-three/drei';
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';

interface Font3DProps {
  status: string;
  delay: number;
  color: string;
  position: [number, number, number];
}

const textureList: Record<string, string> = {
  green1: 'CAE24E_6C9A23_A3C737_B3D43C',
  green2: '4FE34F_2BB02B_3CD03C_1C861C',
  red1: '9D282A_38191D_DFC6CD_D6495A',
  red2: 'AB2C2C_EBB4B3_561212_DE8484',
  orange: 'CB4934_FB9971_F07554_F68464',
  pink: 'CB4E88_F99AD6_F384C3_ED75B9',
  yellow: 'CE8F3D_F0D2B0_F3C77D_E6B278',
};

const Font3D = (props: Font3DProps) => {
  const { status, delay, color, position } = props;
  const [matcapTexture] = useMatcapTexture(color ? textureList[color] : 'CAE24E_6C9A23_A3C737_B3D43C');

  const { width: w, height: h } = useThree((state) => state.viewport);
  const ref = useRef<THREE.Group>(null);

  const [hovered, set] = useState<boolean>(false);
  useCursor(hovered /*'pointer', 'auto', document.body*/);

  // Facetype.js에서 원하는 폰트를 json으로 변환함
  const fontUrl = '/fonts/ONE Mobile Title_Regular.json';
  const fontStyle = {
    font: fontUrl,
    size: 1.5,
    height: 0.5,
    letterSpacing: 0.025,
    bevelSegments: 1,
    bevelEnabled: true,
    bevelSize: 0.08,
    bevelThickness: 0.2,
    // curveSegments: 24
  };

  useFrame((_, delta) => {
    if (ref.current) {
      // ref.current.rotation.y += delta * 0.5;
    }
  });

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (e && e.eventObject) {
      console.log('onClick', e.eventObject);
    }
  };

  return (
    <>
      <Helper type={THREE.BoxHelper} args={['royalblue']} />
      <Center
        ref={ref}
        top
        scale={[0.9, 1, 1]}
        position={position}
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
      >
        <Helper type={THREE.BoxHelper} args={['royalblue']} />
        <Float
          onClick={onClick}
          speed={5} // Animation speed, defaults to 1
          rotationIntensity={0} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Text3D position={[position[0], position[1], position[2]]} rotation={[0, 1, 0]} {...fontStyle}>
            {status}
            <meshMatcapMaterial color='white' matcap={matcapTexture} />
          </Text3D>
          <Text3D
            // rotation={[0, Math.PI/2, 0]}
            rotation={[0, 1, 0]}
            position={[position[0], position[1] - 2.5, position[2]]}
            {...fontStyle}
          >
            {`${delay}분`}
            <meshMatcapMaterial color='white' matcap={matcapTexture} />
          </Text3D>
        </Float>
      </Center>
    </>
  );
};

export default Font3D;
