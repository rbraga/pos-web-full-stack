import React, { useEffect, useState } from 'react';

export function Clock() {
    const [ date, setDate ] = useState(new Date());
    
    useEffect(() => {
        let timerId = setInterval(() => {
            console.log('update time')
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId)
        }
    })

    return (
        <h1>{date.toLocaleTimeString()}</h1>
    )
    
}