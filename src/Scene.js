import { useEffect, useRef, useState , useMemo} from 'react';
import oatchi from './oatchi.png';

export default function Scene() {
  const ref = useRef(); // reference to the DOM within reactJS
  const [ctx, setCtx] = useState(null); //Hook for context and setting the context
  const [x, setX] = useState(10); //x position Hook
  const [oatchiDirection, setOatchiDirection] = useState(12);
  // Wrap the imageOatchi object initialization in useMemo to optimize performance
  const imageOatchi = useMemo(() => {
    const img = new Image();
    img.src = oatchi;
    return img;
  }, []);

  useEffect(() => {
    const draw = () => {
      if (!ctx) return; // exit if ctx is null or falsy
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clears the canvas
      ctx.drawImage(imageOatchi, x, 200, 400, 400); // draws the image onto the canvas
      
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
      // Walk animation function
    
  function walkAnimation() {
    console.log("Scene.js: x position in walking animation is :" + x);
    
    if (x >= window.innerWidth - 400) {
      // Start moving left when it hits the window's right edge
      setOatchiDirection(-1);
    } else if(x <= 0){
      // Reset to the right when it goes off the canvas
      setOatchiDirection(1);
    }
    setX(prevX => prevX + 10 * oatchiDirection); // Update the x position using setX
  }
    const intervalId = setInterval(walkAnimation, 50); // starts the walkAnimation in intervals of 1 second
    console.log("Scene.js: setInterval was called");
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  },[ctx, x, imageOatchi]); // Run the animation loop whenever the context or x position


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