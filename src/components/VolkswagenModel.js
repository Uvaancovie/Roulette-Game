import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/volkswagen_golf_gti.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.car.geometry} material={materials.body} />
    </group>
  );
}

export default function VolkswagenModel() {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
