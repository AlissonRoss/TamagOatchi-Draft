import { useEffect, useRef } from 'react';

export default function Scene() {
  const ref = useRef()
    
  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current.getContext('2d');
      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        console.log("Calling Oatchi draw()");
        
      }
    }
  }, [])

  return <canvas ref={ref} id="scene" height={window.innerHeight} width={window.innerWidth}/>
}
// let wasInitCalled = false;



// export default function animate(){
//     console.log("animate function was called");
//     canvas.clearRect(0, 0, canvas.width, canvas.height);
//     oatchi.draw();
  
//     oatchi.x += oatchi.xVelocity;
//     oatchi.y += oatchi.yVelocity;
    
//     if (oatchi.x + oatchi.vx > canvas.width || oatchi.x + oatchi.vx < 0) {
//         oatchi.vx = -oatchi.vx;
//     }
//     window.requestAnimationFrame(animate);
// }


function eatAnimation(){

}

function poopAnimation(){

}

function playAnimation(){

}
function sleepAnimation(){

}