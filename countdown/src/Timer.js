import React, { useEffect, useState } from 'react'

function Timer() {
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [s, setSeconds] = useState(50);
    const tick = () => {
        if (paused || over) return;
        if(s <= 0) setOver(true);
        else{setSeconds(s-1)}
    }
    const reset = () => {
        setSeconds(50);
    }
    const pause = () => {
        if(paused){
            setPaused(false)
        }else{
            setPaused(true);
        }
    }
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => clearInterval(timerID);
    })


  return (
    <div>
        <p>{over ? "Time's up!" : `${s.toString()}`}</p>
        <button onClick={reset}>Reset</button>
        <button onClick={pause}>Pause</button>

    </div>
  )
}

export default Timer