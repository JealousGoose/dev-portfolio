import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive";
import { Room } from "./room";

function HeroExperience () {

    const isTablet = useMediaQuery({query: '(max-width:1024px )'});
    const isMobile = useMediaQuery({query: '(max-width:768px )'});
    
    return (
        <Canvas camera={{position: [0, 0,20], fov:45}}>
            <ambientLight intensity={0.2} color={"#1a1a40"}/>
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <OrbitControls
                enablePan={false}
                enableZoom = {isTablet}
                maxDistance={200}
                minDistance={3}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <Room/>
        </Canvas>
    )
}

export default HeroExperience