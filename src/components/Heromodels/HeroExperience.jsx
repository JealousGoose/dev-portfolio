import { OrbitControls, Environment, Center } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import MetaModel from "./MetaModel";
import HeroLights from "./HeroLights";

function HeroExperience() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
  const groupRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 45 }} dpr={[1, 1.75]} gl={{ antialias: true, powerPreference: 'high-performance' }} frameloop="always" shadows={false}>
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isMobile}
        enableRotate={!isMobile}
        autoRotate={true}
        autoRotateSpeed={1.6}
        maxDistance={50}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights/>
      <Environment preset="city" background={false} blur={0.6} resolution={32} />
      
      <FloatingGroup ref={groupRef} scale={isMobile ? 2.3 : 2.9} position={[0, -0.75, 0]} speed={2.1} amplitude={0.08}>
        <Center>
          <MetaModel />
        </Center>
      </FloatingGroup>
    </Canvas>
  );
}

export default HeroExperience;

const FloatingGroup = React.forwardRef(function FloatingGroup({ children, position = [0, 0, 0], amplitude = 0.15, speed = 0.9, ...props }, ref) {
  const group = useRef();
  // reconcile external ref
  React.useImperativeHandle(ref, () => group.current);
  const baseY = position[1] ?? 0;
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.position.set(position[0] || 0, baseY + Math.sin(t * speed) * amplitude, position[2] || 0);
  });
  return <group ref={group} {...props}>{children}</group>;
});
