import React from "react";
import { useGLTF } from "@react-three/drei";

export default function MetaModel(props) {
  const gltf = useGLTF("/models/modified_meta.glb");
  return <primitive object={gltf.scene} {...props} />;
}

useGLTF.preload("/models/modified_meta.glb");


