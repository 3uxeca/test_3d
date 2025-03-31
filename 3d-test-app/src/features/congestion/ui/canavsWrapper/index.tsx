import { Canvas } from '@react-three/fiber';

import Lights from '@/shared/ui/3dAssets/Lights';

const CanvasWrapper = () => {
  return (
    <>
      <Canvas
        className="h-full w-full"
        fallback={<div>WebGL 렌더링에 실패하였습니다.</div>}
        onCreated={(state) => {
          state.gl.setClearColor('#F2F2F2');
        }}
      >
        <Lights />
      </Canvas>
    </>
  );
};

export default CanvasWrapper;
