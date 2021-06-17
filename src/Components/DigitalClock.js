import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    const [state, setState] = useState({
        loading: true
    })
    const [stime, setStime] = useState(time)
    const setFun = () => {
        let time = new Date();
        time = moment(time).format('h:mm:ss A')
        setStime(time)
    }

    function demoAsyncCall() {
        return new Promise((resolve) => setTimeout(() => resolve(), 1000));
    }

    useEffect(() => {
        setInterval(setFun, 1000)
        demoAsyncCall().then(() => setState({ loading: false }));
    }, [])

    return (
        <div className="Digital_clock">
            {state.loading === true ? <div><CircularProgress color="secondary" />
            </div> :
                <h5> {stime}</h5>}
        </div>
    )
}

export default DigitalClock
