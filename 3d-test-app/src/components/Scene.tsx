import { Bounds } from "@react-three/drei";
import Button3D from "./Button3D";
import Lights from "./Lights";
import Model3D from "./Model3D";
import Place3D from "./Place3D";

const Scene = () => {
  return (
    <>
      <Lights />
      <Bounds fit clip observe margin={0.7}>
        <Place3D />
        <Button3D />
        <Model3D />
      </Bounds>
    </>
  );
};
export default Scene;
