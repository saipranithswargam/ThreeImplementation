import React from "react";
import styled , {keyframes} from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../assets/3D-Model/Scene.js";
import { Suspense } from "react";
const Container = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: black;
    margin-top: 2rem;
`;
const moveUp = keyframes`
100%{
    transform:translateY(0);
}`
const Tag = styled.h1`
    text-align: center;
    color: white;
    font-size: larger;
    transform:translateY(3rem);
    animation-name:${moveUp};
    animation-duration:2.5s;
    animation-timing-function:ease;
    animation-fill-mode:forwards;
    background-image:linear-gradient(-50deg,var(--gradient));
    background-clip: text; /*this usually doesnt work in chrome so we need to use webkit*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
function RingModel() {
    return (
        <div>
            <Container>
                <Canvas>
                    <ambientLight intensity={2.5} />
                    <directionalLight intensity={1.4} />
                    <Suspense fallback={null}>
                        <Model scale={[0.2, 0.2, 0.2]} />
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </Container>
            <Tag>Drag With mouse to rotate</Tag>
        </div>
    );
}

export default RingModel;
