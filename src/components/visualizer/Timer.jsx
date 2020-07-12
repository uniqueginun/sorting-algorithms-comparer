import React, { useState, useEffect } from 'react'

export default function Timer({ stop }) {

    const [timer, setTimer] = useState(0);

    const clock = timer => {
        var minutes = Math.floor(timer / 60);
        var seconds = timer - minutes * 60;
        var hours = Math.floor(timer / 3600);

        return `${hours}:${minutes}:${seconds}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        if (stop && interval) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [stop]);

    return (
        <div>timing: {clock(timer)}</div>
    )
}
