import { useMainStore } from "@/store/useMainStore";
import { Box } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Place3D = () => {
  const finishRef = useRef<THREE.Mesh>(null);
  const { isFinished } = useMainStore();
  return (
    <>
      <Box position={[0, 50, 150]} args={[100, 100, 400]}>
        <meshStandardMaterial color={"#fbfbfb"} side={THREE.BackSide} />
      </Box>
      <mesh ref={finishRef} position={[0, 1, 345]}>
        <boxGeometry args={[100, 3, 10]} />
        <meshStandardMaterial
          color={isFinished ? "#00ff00" : "#ff0000"}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Place3D;
