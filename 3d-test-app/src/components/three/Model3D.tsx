"use client";

import { useMainStore } from "@/store/useMainStore";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Model3D = () => {
  const { scene, animations } = useGLTF("/models/Man.glb");
  const humanRef = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, humanRef);
  const { isButtonPressed, setButtonPressed, isFinished, setFinished, isReset } =
    useMainStore();
  const [currentAnimation, setCurrentAnimation] = useState(
    "HumanArmature|Man_Idle"
  );
  const [floorPosition, setFloorPosition] = useState(new THREE.Vector3(0, 2, 0)); // 초기 바닥 위치
  const [floorColor, setFloorColor] = useState("#ffffff");  // 기본 바닥 색상

  useEffect(() => {
    console.log(scene, animations);
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (humanRef.current) {
      // console.log("모델상태", humanRef.current.position);     

      // 바닥을 사람의 위치를 따라가게 설정
      setFloorPosition(new THREE.Vector3(        humanRef.current.position.x,
        -0.98, // 바닥 위치 고정
        humanRef.current.position.z));      

      // 사람의 위치에 따라 바닥 색상 변경
      if (humanRef.current.position.z <= 100) {
        setFloorColor("#00ff00"); // 초록색
      } else if (humanRef.current.position.z > 100 && humanRef.current.position.z <= 200) {
        setFloorColor("#ff7b00"); // 주황색
      } else if (humanRef.current.position.z > 200 && humanRef.current.position.z <= 345) {
        setFloorColor("#ff0000"); // 빨간색
      } else if (humanRef.current.position.z >= 345 || humanRef.current.position.z <= 50) {
        setFloorColor('#ffffff')
      }

      // 사람 움직임 로직
      if (isButtonPressed) {
        if (humanRef.current.position.z <= 345) {
          humanRef.current.position.z += delta * 50;
        } else if (humanRef.current.position.z >= 345){
          humanRef.current.rotation.y = Math.PI;
          setFinished(true);
          setButtonPressed(false);        
        }
      }
      if(isReset) {
        humanRef.current.rotation.y = 0;
        humanRef.current.position.z = 0;
        setFloorColor("#ffffff"); // 초기 색상
      }   
    }
  });

  useEffect(() => {
    if (actions) {
      actions[currentAnimation]?.reset().fadeIn(0.5).play();
    }
    return () => {
      actions[currentAnimation]?.fadeOut(0.5).stop();
    };
  }, [actions, currentAnimation]);

  useEffect(() => {
    if(isButtonPressed && !isFinished && !isReset) {
      setCurrentAnimation("HumanArmature|Man_Walk");
    }
    if(!isButtonPressed) {
        setCurrentAnimation("HumanArmature|Man_Idle");
    }
    if (isFinished) {
      setCurrentAnimation("HumanArmature|Man_Clapping");
    }
    if(isReset) {
      setCurrentAnimation("HumanArmature|Man_Idle");
    }
  }, [isButtonPressed, isFinished, isReset]);


  return (
    <>
      {/* 사람 모델 */}
      <primitive ref={humanRef} object={scene} scale={5} position={[0, 0, -10]} />
      {/* 사람의 발 아래 위치하는 작은 바닥 */}
      <mesh
        position={floorPosition}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
        visible={true}
      >
        <boxGeometry args={[20, 20, 2]} /> {/* 2x2 크기의 작은 바닥 */}
        <meshStandardMaterial color={floorColor} />
      </mesh>
    </>
  );
};

export default Model3D;
