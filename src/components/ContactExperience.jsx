import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { Computer } from './Models/Computer-optimized';

const ContactExperience = () => {
    return (
        <div className="h-full w-full">
            <Canvas 
                camera={{ position: [0, 3, 7], fov: 45 }}
                style={{ height: '100%', width: '100%' }}
                shadows
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} color="#fff4e6" />

                    <directionalLight 
                        position={[5, 5, 3]} 
                        intensity={2.5} 
                        color="#ffd9b3"
                        castShadow 
                    />

                    <directionalLight 
                        position={[5, 9, 1]} 
                        intensity={2.5} 
                        color="#ffd9b3"
                        castShadow 
                    />

                    <pointLight 
                        position={[-5, 5, 5]} 
                        intensity={0.5} 
                    />
                    
                    <Environment preset="city" />
                    
                    <OrbitControls 
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={1}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI / 2.5}
                        minDistance={3}
                        maxDistance={12}
                    />

                    <group scale={0.03} position={[0, -1.5, -2]} castShadow>
                        <Computer />
                    </group>

                    <group scale={[1,1,1]}>
                        <mesh receiveShadow position={[0,-1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry args={[30, 30]}/>
                            <meshStandardMaterial color="#cd7c21" />
                        </mesh>
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ContactExperience;
