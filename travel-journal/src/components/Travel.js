import React from 'react';

export default function Travel(props) {
    const location = props.location.toUpperCase();
    return (
        <div className='travel-container'>
            <img class="travel-image" src={props.imageUrl} alt="" ></img>
            <div className='body-right'>
                <div className='travel-location'>
                    <img src="lovation.webp" alt=""></img>
                    <p>{location} <a href={props.googleMapsUrl}>View on Google Maps</a></p> 
                    {/* <a href={props.googleMapsUrl}> View on Google Maps</a> */}
                </div>
                <h1 className='travel-title'> {props.title} </h1>
                <p className='travel-dates'>{props.startDate} - {props.endDate}</p>
                <p className='travel-desc'>{props.description}</p>
            </div>
        </div>
    )
}