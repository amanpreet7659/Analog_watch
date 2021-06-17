import moment from 'moment-timezone'
import "./App.css"
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Select from 'react-select';

const Timezone = ({ search, compare, setCheck }) => {
    const zone = moment.tz.names()
    const [timeZone, setTimezone] = useState(zone)
    const [searh, setSearh] = useState();
    const [getZone, setGetzone] = useState([])
    const [state, setState] = useState({
        selectedOption: [],
        zone: '',
    })
    const [state1, setState1] = useState({
        selectedsecondOption: [],
        zone: ''
    })
    const [result, setResult] = useState()

    const handleSearch = (e) => {
        const out = zone.filter((i) => { return (i.includes(e.target.value)) })
        if (e.target.value === "") {
            setTimezone(zone)
        }
        else {
            console.log("out ", out);
            setSearh(out)
            setTimezone(out)
        }
    }
    useEffect(() => {
        var now = state.zone
        var then = state1.zone
        setResult(moment.utc(moment(now, "DD/MM/YYYY HH:mm:ss A").diff(moment(then, "DD/MM/YYYY HH:mm:ss A"))).format("HH:mm:ss"))
    }, [state1.zone, state.zone])

    const options = timeZone.map((i) => { return { value: i, label: i } })

    const change = (e) => {
        var now = new Date();
        var time = now.toLocaleString('en-US', { timeZone: e.value });
        time = moment(time).format('DD/MM/YYYY HH:mm:ss A')
        setState({ selectedfirstOption: e, zone: time })
        console.log(time, 'now');
    }

    const change1 = (e) => {
        var now = new Date();
        var time = now.toLocaleString('en-US', { timeZone: e.value });
        time = moment(time).format('DD/MM/YYYY HH:mm:ss A')
        console.log(time, 'then');
        setState1({ selectedsecondOption: e, zone: time })
    }
    const handleCompare = () => {
        setCheck({ compare: false })
    }
    return (
        <div>
            {search === true && <div>
                <input onChange={handleSearch} type="search" id="search" placeholder="Type here for search " autoComplete="off" />
                <input className="button button1" type="button" value="Cancel" onClick={handleCompare} />
            </div>}
            {
                compare === true && <div>
                    <Select
                        options={options}
                        onChange={change}
                        value={state.selectedOption}
                        placeholder="Select First zones"
                    />
                    <Select
                        options={options}
                        onChange={change1}
                        value={state1.selectedOption}
                        placeholder="Select Second zones"
                    />
                    <input type="button" className="button button1" value="Cancel" onClick={handleCompare} />
                </div>
            }
            {
                compare === true && <div className="second">
                    <h5>Compare Time is :</h5>
                    {console.log('result ', result)}
                    {state.zone && state.zone != undefined && state1.zone && state1.zone != undefined && <label>{result}</label>}
                </div>
            }
            <br></br>
            <br></br>
            {
                search === true && <div
                    style={{ maxHeight: 'calc(121vh - 250px)', overflowY: 'auto' }}
                >
                    <InfiniteScroll
                        dataLength={timeZone.length}
                        scrollableTarget="scrollableDiv"
                        hasMore={true}
                    // loader={<h4>Loading...</h4>}
                    >
                        <table>
                            <thead>
                                <th>Zones</th>
                            </thead>
                            <tbody>
                                {
                                    timeZone.map((i, j) => { return <tr><td>{j + 1}</td><td>{i}</td></tr> })
                                }
                            </tbody>
                        </table>
                        <div>
                            {/* {timeZone.map((i) => {
                                return <div>
                                    <div className="clocks">
                                        <img className="image" src="https://freesvg.org/img/clock-michael-breuer-03.png" /><br></br>
                                        <label className="zonename">{i}</label>
                                    </div>
                                </div>
                            })} */}
                        </div>
                    </InfiniteScroll>
                </div>
            }
        </div>
    )
}

export default Timezone
