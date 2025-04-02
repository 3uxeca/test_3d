import { Grid } from '@react-three/drei';

const TestGrid = () => {
  return (
    <Grid
      position={[0, 0, 0]}
      args={[100, 100]} // width, height in world units (meter)
      cellSize={1.2} // 각 칸의 사이즈 1.2m
      cellThickness={0.5}
      sectionSize={1.8} // 1.8m 간격으로 굵은 선
      sectionThickness={1}
      sectionColor={'#d9d9d9'}
      cellColor={'#ff0000'}
      fadeDistance={10000}
      fadeStrength={1}
    />
  );
};

export default TestGrid;
