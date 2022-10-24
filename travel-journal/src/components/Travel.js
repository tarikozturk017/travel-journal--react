import React from 'react';

export default function Travel(props) {
    return (
        <div className='travel-container'>
            <img class="travel-image" src={props.imageUrl} alt="" ></img>
            <div className='travel-location'>
                <p>{props.location}</p> 
                <a href={props.googleMapsUrl}> View on Google Maps</a>
            </div>
            <h2 className='travel-title'> {props.title} </h2>
        </div>
    )
}