import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.36, 0, -0.24]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
