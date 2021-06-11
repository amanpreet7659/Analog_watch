import moment from 'moment';
import React, { useState } from 'react'

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    const [stime, setStime] = useState(time)
    const setFun = () => {
        let time = new Date();
        time=moment(time).format('h:mm:ss A')
        setStime(time)
    }
    setInterval(setFun, 1000)

    return (
        <div className="Digital_clock">
            <h3> {stime}</h3>
        </div>
    )
}

export default DigitalClock
