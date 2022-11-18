/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: re1monsen (https://sketchfab.com/re1monsen)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/the-discobolus-of-myron-492ad236e4cb4322875d546d3edd6524
title: The Discobolus of Myron
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material_001} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
