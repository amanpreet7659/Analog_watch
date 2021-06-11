import moment from 'moment-timezone'
import React, { useState } from 'react'

const Timezone = () => {
    const zone=moment.tz.names()
    const [timeZone,setTimezone]=useState(zone)
    return (
        <div>
            {/* <p>{zone}</p> */}
            <table>
                <thead>
                    <th>Zones</th>
                </thead>
                <tbody>
                    {
                        timeZone.map((i,j)=>{console.log(j,i); return <tr><td>{i}</td></tr>})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Timezone
