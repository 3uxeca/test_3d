"use client";
import { useMainStore } from "@/store/useMainStore";
import { Box, Html } from "@react-three/drei";
import { ThreeEvent } from '@react-three/fiber';
import { useEffect } from "react";

const Button3D = () => {
  const { isButtonPressed, setButtonPressed, isFinished, setFinished, isReset, setReset } =
    useMainStore();
  const onClickButton = (e:ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setReset(false);
    setButtonPressed(!isButtonPressed);
  };

  const onClickResetButton = (e:ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setReset(!isReset);
    setFinished(false);
  }

  useEffect(() => {
    console.log("버튼 눌림? isButtonPressed :: ", isButtonPressed);
  }, [isButtonPressed]);
  const actionButtonDepth = !isButtonPressed ? 5 : 3;
  const resetButtonDepth = isFinished ? 5 : 3;
  return (
    <>
      <group name='PlayPauseButton'>
        <mesh position={[20, actionButtonDepth, -10]} onClick={onClickButton}>
          <cylinderGeometry attach={"geometry"} args={[5, 5, 3, 64]} />
          <meshStandardMaterial
            attach={"material"}
            color={isButtonPressed ? "#00ff00" : "#ff0000"}
          />
        </mesh>
        <Box args={[15, 3, 15]} position={[20, 2, -10]} material-color="#dbdbdb" />
        <Html position={[30, -5, -10]}>
          <div>{isButtonPressed ? 'PAUSE' : 'PLAY'}</div>
        </Html>        
      </group>
      
      <group name='ResetButton'>
        <mesh position={[-20, resetButtonDepth, -10]} onClick={onClickResetButton}>
          <cylinderGeometry attach={"geometry"} args={[5, 5, 3, 64]} />
          <meshStandardMaterial
            attach={"material"}
            color={'#0000ff'}
          />
        </mesh>
        <Box args={[15, 3, 15]} position={[-20, 2, -10]} material-color="#dbdbdb" />
        <Html position={[-15, -5, -10]}>
          <div>RESET</div>
        </Html>      
      </group>
    </>
  );
};

export default Button3D;
