import React, { useEffect, useState} from 'react';

export default function Time(){
    const [time, setTime] = useState(new Date()); //new state for current time and setting time

    useEffect(() => {
      const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);//updates time every second
        return() => clearInterval(interval);
      } 
    );

    return(
        <div>Time {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</div>
    )
}