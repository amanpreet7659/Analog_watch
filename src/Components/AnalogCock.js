import React, { useEffect, useState } from 'react'
import Clock from './Clock';
import CircularProgress from '@material-ui/core/CircularProgress';

const AnalogCock = ({ setShow }) => {
    const [state, setState] = useState({
        secondRatio: 0,
        minuteRatio: 0,
        hourRatio: 0,
        loadding: true
    })
    function demoAsyncCall() {
        return new Promise((resolve) => setTimeout(() => resolve(), 1000));
    }

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
        demoAsyncCall().then(() => setState({ loading: false }));
    }, [])
    return (
        <div onClick={() => { setShow(pre => !pre) }}>
            {state.loadding === true ? <div>      <CircularProgress color="secondary" />
            </div> : <Clock secondRatio={state.secondRatio} minuteRatio={state.minuteRatio} hourRatio={state.hourRatio} />
            }
        </div>
    )
}

export default AnalogCock
