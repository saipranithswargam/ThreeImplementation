/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Laser Design (https://sketchfab.com/Laserdesign)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/wedding-ring-3d-scan-e23e94396aa7461b9ea4d8697514bd7a
title: Wedding Ring 3D Scan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
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