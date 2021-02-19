// 動いている物体
import React, { useRef } from 'react'; // 値が変わっても変更は通知されない（再レンダリングされない）
// useFrame 1フレームごとに引数にとった関数をトリガ(1フレーム≒60fps(1秒間に60回処理))
import { Canvas, useFrame } from 'react-three-fiber';

const words = [
  { id: "nav-home", japanese: "ホーム", english: "home" },
  { id: "nav-about", japanese: "紹介", english: "about" },
  { id: "nav-work", japanese: "作品", english: "work" },
  { id: "nav-contact", japanese: "連絡", english: "contact" },
  // { id: "home", japanese: "ホーム", english: "honest" },
  // { id: "construction", japanese: "工事してます", english: "construct!!!" },
];
// boxの色
let boxColor = "green";
// boxの大きさ
let boxSize = [50, 300, 400];

const handleClick = () => {
  boxColor = "black";
  boxSize = [50, 800, 200];
  words.map(word => {
    return document.getElementById(word.id).textContent = word.japanese;
  })
  document.getElementById("nav-home").style.color = boxColor;
}
const handleHover = () => {
  boxColor = "red";
  boxSize = [70, 800, 800];
  document.getElementById("nav-home").style.color = boxColor;
}
const handleUnHover = () => {
  // boxSize = [100, 50, 300];
  document.getElementById("nav-home").style.color = boxColor;
}

const Thing = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    // 公転
    ref.current.position.x += Math.cos(clock.getElapsedTime()) * 3;
    ref.current.position.y += Math.sin(clock.getElapsedTime()) * 1;
    ref.current.position.z += Math.sin(clock.getElapsedTime()) * 1;
    // 回転
    // ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.03;
    ref.current.rotation.z += 0.02;
  });
  return (
    <mesh
      ref={ref} // 再レンダリングを防ぎ、値を更新
      onClick={e => { handleClick() }}
      onPointerOver={e => { handleHover() }}
      onPointerOut={e => { handleUnHover() }}
    >
      {/* サイズ */}
      {/* <planeBufferGeometry attach='geometry' args={[1, 1]} /> */}
      <boxGeometry attach='geometry' args={boxSize} />
      {/* <sphereGeometry attach='geometry' args={[300, 30, 30]} /> */}
      <meshBasicMaterial
        attach='material'
        color={boxColor}
        opacity={0.6}
        transparent
      />
    </mesh>
  );
};

// スタイル
const theme = {
  position: "absolute",
  zIndex: "4",
  top: "35%",
  left: "0px",
  width: "330px",
  height: "330px",
}
const PaperAnime = () => {
  return (
    <div style={theme}>
      <Canvas camera={{ position: [0, 0, 1000] }}>
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

export default PaperAnime;