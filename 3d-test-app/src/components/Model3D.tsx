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
  const { isButtonPressed, setButtonPressed, isFinished, setFinished } =
    useMainStore();
  const [currentAnimation, setCurrentAnimation] = useState(
    "HumanArmature|Man_Idle"
  );

  useEffect(() => {
    console.log(scene, animations);
  }, []);

  useFrame((state, delta) => {
    if (humanRef.current && isButtonPressed) {
      // console.log("모델상태", humanRef.current.position);
      if (isButtonPressed) {
        if (humanRef.current.position.z <= 345) {
          humanRef.current.position.z += delta * 50;
        } else {
          humanRef.current.rotation.y = Math.PI;
          setFinished(true);
          setButtonPressed(false);
        }
      } else {
        // setCurrentAnimation("HumanArmature|Man_Idle");
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
    if (isButtonPressed) {
      setCurrentAnimation("HumanArmature|Man_Walk");
    }
  }, [isButtonPressed]);

  useEffect(() => {
    if (isFinished) {
      setCurrentAnimation("HumanArmature|Man_Clapping");
    }
  }, [isFinished]);

  return (
    <>
      <primitive ref={humanRef} object={scene} scale={5} position={[0, 0, 0]} />
    </>
  );
};

export default Model3D;
