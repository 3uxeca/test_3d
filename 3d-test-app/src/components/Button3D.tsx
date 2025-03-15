"use client";
import { useMainStore } from "@/store/useMainStore";
import { Box } from "@react-three/drei";
import { useEffect } from "react";

const Button3D = () => {
  const { isButtonPressed, setButtonPressed, isFinished, setFinished } =
    useMainStore();
  const onClickButton = () => {
    console.log("버튼 눌림");
    setButtonPressed(!isButtonPressed);
  };

  useEffect(() => {
    console.log("버튼 눌림? isButtonPressed :: ", isButtonPressed);
  }, [isButtonPressed]);
  const buttonDepth = !isButtonPressed ? 5 : 3;
  return (
    <>
      <mesh position={[20, buttonDepth, 0]} onClick={onClickButton}>
        <cylinderGeometry attach={"geometry"} args={[5, 5, 3, 64]} />
        <meshStandardMaterial
          attach={"material"}
          color={isButtonPressed ? "#00ff00" : "#ff0000"}
        />
      </mesh>
      <Box args={[15, 3, 15]} position={[20, 2, 0]} material-color="#dbdbdb" />
    </>
  );
};

export default Button3D;
