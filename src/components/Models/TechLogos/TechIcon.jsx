//load a glb model 
// add basic lighting
// apply environment reflections for realism
// wrap the model in a floating animation
// optionally tweak the material (like setting a white color on a specific mesh)
// disable zoom using orbitcontrols

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
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
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <Environment preset="city"/>

            <OrbitControls enableZoom={false}/>

            <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene}>

                    </primitive>
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon;