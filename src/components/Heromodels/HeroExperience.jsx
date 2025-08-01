import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./room";
import HeroLights from "./HeroLights";

function HeroExperience() {
  const isTablet = useMediaQuery({ query: "(max-width:1024px )" });
  const isMobile = useMediaQuery({ query: "(max-width:768px )" });

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
      
      <OrbitControls
        enablePan={false}
        enableZoom={isTablet}
        maxDistance={200}
        minDistance={3}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights/>
      
      <group 
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4 , 0]}
        >
      <Room />
      </group>
    </Canvas>
  );
}

export default HeroExperience;
