import React, { useRef } from 'react'; // 値が変わっても変更は通知されない（再レンダリングされない）
import { Canvas, useFrame } from 'react-three-fiber';
// useFrame 1フレームごとに引数にとった関数をトリガ(1フレーム≒60fps(1秒間に60回処理))
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon';
import {handleClick, handleHover, handleUnHover} from './animejs'; // 機能.js

// 物体の色
const boxColor = "#00aaff";
// boxの大きさ
const boxSize = [50, 300, 400];
// 縮尺
const theme = {
  width: "50vw",
  height: "50vh",
}


const Thing = () => {
  const ref = useRef();
  useFrame(({ clock }) => { // 便利な記述方法
    // 公転
    ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3;
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 1;
    ref.current.position.z += Math.sin(clock.getElapsedTime()) * 2;
    // 回転
    // ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.03;
    ref.current.rotation.z += 0.02;
  });
  return (
    <mesh
      ref={ref} // 再レンダリングを防ぎ、値を更新
      onClick={e => {handleClick()}}
      onPointerOver={e => {handleHover()}}
      onPointerOut={e => {handleUnHover()}}
    >
      {/* サイズ */}
      {/* <planeBufferGeometry attach='geometry' args={[1, 1]} /> */}
      <boxGeometry attach='geometry' args={boxSize} />
      {/* <sphereGeometry attach='geometry' args={[300, 30, 30]} /> */}
      <meshBasicMaterial
        attach='material'
        color={boxColor}
        opacity={1}
        transparent
      />
    </mesh>
  );
};

export const Anime = () => {
  return (
    <div style={theme} id="canvasstyle" className="">
      <Canvas camera={{ position: [200, 300, 1000] }}>
        <pointLight
          color="#FFFFFF"
          intensity={1}
          position={[0, 100, 200]}
        />
        <Thing />
      </Canvas>
    </div>
  );
};
