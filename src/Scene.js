import { useEffect, useRef, useState } from 'react';
import oatchi from './oatchi.png';

export default function Scene() {
  const ref = useRef(); // reference to the DOM within reactJS
  const [ctx, setCtx] = useState(null); //Hook for context and setting the context
  let x = 10; //x position
  
  const draw = () => {
    if (!ctx) return; //exit if ctx is null or falsy

    const imageOatchi = new Image(); //New Image object so JS can manipulate it
    imageOatchi.src = oatchi; //source of Image for Oatchi
    imageOatchi.onload = function () {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clears the canvas
      ctx.drawImage(imageOatchi, x, 200, 400, 400); //draws the image onto the canvas
    };
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext('2d'); //drawing context so we can animate onto the canvas
      setCtx(context); //sets the context into a state Hook
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      
      draw();
      requestAnimationFrame(animate); // Call requestAnimationFrame recursively
    };
    animate();
  }, [ctx]); // Run the animation loop whenever the context changes

  // Walk animation function
  function walkAnimation() {
    console.log("x position in walking animation is :"+x)
    if (x < window.innerWidth) {
      x += 10;
    } else {
      x = -100; // Reset the position to the left when it goes off the canvas
    }
  }

  // Call the walkAnimation function periodically
  useEffect(() => {
    const intervalId = setInterval(walkAnimation, 1000); // starts the walkAnimation in intervals of 1 second
    console.log("setInterval within Scene.js was called");
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

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