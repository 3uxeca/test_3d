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
  const [targetX, setTargetX] = useState(0); // 목표 X 위치
  const [isMovingX, setIsMovingX] = useState(false); // X 이동 중 여부  
  const centerX = 5;
  const leftX = 50;
  const rightX = -50;

  useEffect(() => {
    console.log(scene, animations);
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (humanRef.current) {
      // console.log("모델상태", humanRef.current.position);     

      // 바닥을 사람의 위치를 따라가게 설정
      setFloorPosition(new THREE.Vector3(humanRef.current.position.x,
        -0.98, // 바닥 위치 고정
        humanRef.current.position.z));       

      // 사람의 위치에 따라 바닥 색상 변경
      if (humanRef.current.position.z <= 100) {
        setFloorColor("#00ff00"); // 초록색
      } else if (humanRef.current.position.z > 120 && humanRef.current.position.z <= 200) {
        setFloorColor("#ff7b00"); // 주황색
      } else if (humanRef.current.position.z > 200 && humanRef.current.position.z <= 345) {
        setFloorColor("#ff0000"); // 빨간색
      } else if (humanRef.current.position.z >= 345 || humanRef.current.position.z <= 50) {
        setFloorColor('#ffffff')
      }

      // 사람 움직임 로직
      // if (isButtonPressed) {
      //   if (humanRef.current.position.z <= 345) {
      //     humanRef.current.position.z += delta * 50;
      //   } else if (humanRef.current.position.z >= 345){
      //     humanRef.current.rotation.y = Math.PI;
      //     setFinished(true);
      //     setButtonPressed(false);        
      //   }
      // }
      // 사람이 걷는 방향을 결정하기 위한 변수
      let newX = humanRef.current.position.x;
      let newRotationY = humanRef.current.rotation.y;
      const WALK_SPEED = 30;
      
      // 특정 구간에서 x 값 변경 (좌우로 이동)
      if (isButtonPressed) {
        // console.log('human position :: ', humanRef.current.position);
        if (humanRef.current.position.z <= 345) {
          // 특정 구간에서 목표 X 좌표와 회전값 설정
          if (humanRef.current.position.z <= 100) {
            // setTargetX(-10); // 왼쪽으로 이동
            // newRotationY = Math.PI / 2; // 왼쪽 보기 (90도)
          } else if (humanRef.current.position.z > 120 && humanRef.current.position.z <= 150) {
            setTargetX(leftX); // 왼쪽으로 이동
            newRotationY = Math.PI / 2; // 왼쪽 보기 (90도)
          } else if (humanRef.current.position.z > 150 && humanRef.current.position.z <= 200) {
            setTargetX(centerX); // 정면으로 이동
            newRotationY = 0; // 정면 보기 (0도)
          } else if (humanRef.current.position.z > 200 && humanRef.current.position.z <= 270) {
            setTargetX(rightX); // 오른쪽으로 이동
            newRotationY = -Math.PI / 2; // 오른쪽 보기 (-90도)
          } else if(humanRef.current.position.z > 270 && humanRef.current.position.z <= 345) {
            setTargetX(leftX);
            newRotationY = Math.PI / 2;
          } else {
            setTargetX(0); // 정면으로 이동
            newRotationY = 0; // 정면 보기 (0도)
          }

          // X 이동이 목표에 도달했는지 확인
          if(newRotationY === -Math.PI / 2 || newRotationY === Math.PI / 2) {
            setIsMovingX(true);
            if(targetX <= 0) {
              // 오른쪽 이동    
              if(humanRef.current.position.x <= -50) {
                console.log('오른쪽 끝에 닿았다');
                newRotationY = 0; // 정면 보기 (0도)
                setIsMovingX(false);
              }    
            } else {
              // 왼쪽으로 이동
              if(humanRef.current.position.x >= 50) {
                console.log('왼쪽 끝에 닿았다');
                newRotationY = 0; // 정면 보기 (0도)
                setIsMovingX(false);
              }                  
            }
          }


          // 부드럽게 회전 (lerp 사용)
          humanRef.current.rotation.y = THREE.MathUtils.lerp(
            humanRef.current.rotation.y,
            newRotationY,
            0.1 // 부드러운 회전 전환
          );

          // X 이동이 끝나면 Z 방향 이동 시작
          if (!isMovingX) {
            humanRef.current.position.z += delta * WALK_SPEED;
            // humanRef.current.position.x = delta;
          } else if(isMovingX) {
            if(targetX < 0) {
              humanRef.current.position.x -= delta * WALK_SPEED;
            } else {
              humanRef.current.position.x += delta * WALK_SPEED;
            }
          }
        } else {
          humanRef.current.rotation.y = Math.PI; // 도착 후 180도 회전
          setFinished(true);
          setButtonPressed(false);
        }
      }

      if(isReset) {
        humanRef.current.rotation.y = 0;
        humanRef.current.position.z = 0;
        humanRef.current.position.x = 0;
        setFloorColor("#ffffff"); // 초기 색상
      }   
    }
  });

  useEffect(() => {
    console.log('targetX :: ', targetX);
  }, [targetX]);

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
        <boxGeometry args={[40, 40, 2]} /> {/* 2x2 크기의 작은 바닥 */}
        <meshStandardMaterial color={floorColor} transparent opacity={0.5} />
      </mesh>
    </>
  );
};

export default Model3D;
