import React, { useState, useEffect } from 'react'

export default function Timer({ stop }) {

    const [timer, setTimer] = useState(0);

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
        <div>timing: {timer}</div>
    )
}
