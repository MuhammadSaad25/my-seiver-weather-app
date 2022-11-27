import React from 'react'
import data from "./data.json"


const weather = () => {
    return (
        <div>
            {data.map(data => {
                return (
                    <div>
                        {data.temp}
                    </div>
                )
            })}
        </div>
    )
}

export default weather