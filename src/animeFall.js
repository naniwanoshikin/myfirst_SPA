import React from 'react';
import * as CANNON from 'cannon';
import { Canvas } from 'react-three-fiber';
import { useCannon, Provider } from './anime2Cannon';

// 背景色
const color = "#fff56c";

const Plane = ({ position }) => {
  const ref = useCannon({ mass: 0 }, body => {
    body.addShape(new CANNON.Plane());
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[1000, 1000]} />
      <meshPhongMaterial attach='material' color={color} />
    </mesh>
  );
};

const Box = ({ position, args }) => {
  const ref = useCannon({ mass: 100000 }, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' />
    </mesh>
  );
};

export const Falling = () => {
  return (
    <div style={{
      width: "100%",
      height: "50vh",
      // position: "absolute",
      // top: "0",
      // left: "30",
    }}>
      <Canvas camera={{ position: [5, 5, 20] }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.6}
          position={[30, 30, 50]}
          angle={0.2}
          penumbra={1}
          castShadow
        />
        <Provider>
          <Plane position={[0, 0, -30]} />
          {/* 初期位置、大きさ */}
          <Box position={[1, 0, 1]} args={[10, 2, 2]} />
          <Box position={[1, 0, 1]} args={[10, 1, 5]} />
          <Box position={[2, 10, 10]} args={[3, 3, 3]} />
          <Box position={[10, 0, 6]} args={[2, 4, 2]} />
          <Box position={[-1, 1, 8]} args={[2, 3, 2]} />
          <Box position={[0, 2, 9]} args={[5, 5, 1]} />
          <Box position={[2, -1, 12]} args={[1, 1, 10]} />
        </Provider>
      </Canvas>
    </div>
  );
};

export default Falling;