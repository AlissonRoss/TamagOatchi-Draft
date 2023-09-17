import React from 'react';

import { useSpring, animated } from '@react-spring/web'
export default function AnimateOatchi(){
    const walkAnimation = useSpring({
        from: { left: '-100vw' }, // Initial position (left off the screen)
        to: { left: 'calc(100% - 100vw)' }, // Final position (right edge of the screen)
        config: { duration: 7000 },// Animation duration in milliseconds
        loop: true 
    });

    return <animated.div id="scene" 
        style={{height:'70vh',
        width:'100vw',
       }}>
        <animated.img
            src="./oatchi.png" // Image source
            alt="Oatchi"
            style={{
            width: '4%', // Make sure the image fills the container
            height: '4%', // Make sure the image fills the container
            left: walkAnimation.left,
            position: 'relative'
        }}/>
    </animated.div>
       
}