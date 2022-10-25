import React from 'react';
import Travel from './Travel';
import data from "../data"

export default function Body() {
    const travels = data.map(item => {
        return (
            <Travel 
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className='body'>
            {travels}
        </div>
    )
}