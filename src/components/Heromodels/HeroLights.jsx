import * as THREE from 'three';

function HeroLights(){
 return (
    <>
        <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.6} />
        <directionalLight position={[3, 6, 5]} intensity={1} />
    </>
 )
}

export default HeroLights;