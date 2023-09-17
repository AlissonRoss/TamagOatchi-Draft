import { useEffect, useRef, useState } from 'react';
import oatchi from './oatchi.png';

export default function Scene() {
  const ref = useRef(); // reference to the DOM within reactJS
  const [ctx, setCtx] = useState(null); //Hook for context and setting the context
  const [x, setX] = useState(10); //x position Hook
  
  useEffect(() => {
    const draw = () => {
      if (!ctx) return; // exit if ctx is null or falsy

      const imageOatchi = new Image(); // New Image object so JS can manipulate it
      imageOatchi.src = oatchi; // source of Image for Oatchi
      imageOatchi.onload = function () {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clears the canvas
        ctx.drawImage(imageOatchi, x, 200, 400, 400); // draws the image onto the canvas
      };
    };

    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d'); // drawing context so we can animate onto the canvas
      setCtx(context); // sets the context into a state Hook
    }

    const animate = () => {
      draw();
      requestAnimationFrame(animate); // Call requestAnimationFrame recursively
    };
    animate();
  }, [ctx, x]); // Run the animation loop whenever the context or x position

 

  // Call the walkAnimation function periodically
  useEffect(() => {
     // Walk animation function
  function walkAnimation() {
    console.log("Scene.js: x position in walking animation is :" + x);
    if (x < window.innerWidth) {
      setX(prevX => prevX + 100); // Update the x position using setX
    } else {
      setX(-100); // Reset the position to the left when it goes off the canvas
    }
  }
    const intervalId = setInterval(walkAnimation, 1000); // starts the walkAnimation in intervals of 1 second
    console.log("Scene.js: setInterval was called");
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [ctx, x]);

  return <canvas ref={ref} id="scene" height={window.innerHeight} width={window.innerWidth} />;
}

function eatAnimation(){

}

function poopAnimation(){

}

function playAnimation(){

}
function sleepAnimation(){

}