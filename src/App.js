
import * as THREE from 'three';

import React,{useRef} from 'react';
import {Canvas,useFrame} from 'react-three-fiber';
import { Model } from './components/ElEMENTS';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
// import { Box } from 'drei';
// const SpinningMesh = ({position,args}) => {
//   const mesh = useRef(null)
//   useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y+=0.01));
//   return (
//     <>
//       <mesh position={position} ref={mesh} className="mes">
//         <boxBufferGeometry attach="geometry" args={[-2,3,1]}/>
//         <meshStandardMaterial attach='material' color='blue'/>
//       </mesh>
//     </>
//   )
// }
const Device = (props)=> {
  const { nodes, materials } = useGLTF('/ElEMENTS.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.003']} rotation={[0, 1.28, 0]} scale={[0.23, 0.1, 0.23]} />
    </group>
  )
}
function App() {
  return (
   <>
   <Canvas>
   <mesh>
   <OrbitControls/>
<Model/>
   </mesh>
 
   </Canvas>
   </>
  );
}

export default App;
