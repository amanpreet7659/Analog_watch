import React, { useEffect, useState } from 'react'
import Clock from './Clock';

const AnalogCock = () => {
    const [state, setState] = useState({
        secondRatio: 0,
        minuteRatio: 0,
        hourRatio: 0
    })
    const setClock = () => {
        const currentDate = new Date;
        let secondRatio = currentDate.getSeconds() / 60;
        let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
        let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
        setState({ secondRatio: secondRatio = currentDate.getSeconds() / 60 })
        setState({ minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 })
        setState({ hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12 });
    }

    useEffect(() => {
        setInterval(setClock, 1000)
    }, [])
    return (
        <div>
            <Clock secondRatio={state.secondRatio} minuteRatio={state.minuteRatio} hourRatio={state.hourRatio} />
        </div>
    )
}

export default AnalogCock
