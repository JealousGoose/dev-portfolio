//load a glb model 
// add basic lighting
// apply environment reflections for realism
// wrap the model in a floating animation
// optionally tweak the material (like setting a white color on a specific mesh)
// disable zoom using orbitcontrols

import { useGLTF, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { color } from "three/tsl";
import * as THREE from 'three';

const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath)

    useEffect(() => {
        if(model.name === 'Interactive Developer'){
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === 'Object_5'){
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }
    }, [scene])

    return (
        <Canvas dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: 'high-performance' }} frameloop="demand">
            <ambientLight intensity={0.4} />
            <directionalLight position={[3, 5, 5]} intensity={0.6}/>
            <Environment preset="city" background={false} blur={0.4} resolution={32} />
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}>
                </primitive>
            </group>
        </Canvas>
    )
}

export default TechIcon;