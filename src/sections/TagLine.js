import React from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useRef } from "react";
const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color:var(--dark);
    color:var(--white);
`;

const moveUp = keyframes`
100%{
    transform:translateY(0);
}

`

const Text = styled.p`
width:50%;
font-size:var(--fontlg);
position:relative;
height:var(--fontmd);
overflow:hidden;

span{
    position:absolute;
    transform:translateY(3rem);
    animation-name:${moveUp};
    animation-duration:2.5s;
    animation-timing-function:ease;
    animation-fill-mode:forwards;
    animation-delay:${props=>props.delay};
    font-family:var(--fontL);
    background-image:linear-gradient(-45deg,var(--gradient));
    background-clip:text;/*this usually doesnt work in chrome so we need to use webkit*/ 
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

.author{
    width:100%;
    text-align:end;
    background-image:linear-gradient(-180deg,var(--gradient));
}

`

const TagLine = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    useLayoutEffect(()=>{
        let Elem = sectionRef.current;
       let trigger =  ScrollTrigger.create({
            trigger:Elem,
            start:"top top",
            // end:"bottom-=100 center",
            // markers:true,
            pin:true,
            pinSpacing:false,
            // endTrigger:"#otherID",
            // end:"bottom 50%+=100px",
            // onToggle:self => console.log("toggled,isActive:",self.isActive),
            // onUpdate:self=>{
            //     console.log("progress:",self.progress.toFixed(3),"direction:",self.direction,"velocity:",self.getVelocity())
            // }

        });
        return ()=>{
            if(trigger) trigger.kill();
        }
    },[])
      
    return (
        <Section ref={sectionRef}>
            <TextContainer>
            <Text delay="0s" ><span>&#8220;Delicate pieces filled with minute details;</span></Text> 
            <Text delay="0.4s"><span>&nbsp;&nbsp;that vividly portray our craftsmen's </span></Text> 
            <Text delay="0.8s"><span>&nbsp;&nbsp;journey creating them.</span></Text> 
            </TextContainer>
        </Section> //anything between this section will get the styles qritten above
    );
};

export default TagLine;
