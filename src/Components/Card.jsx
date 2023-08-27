import React from 'react'


function Card(props){

    return (
        <div className='card'>
            <img src={props.tour.image} alt="card" className='image'/>
        <div className='tour-info'>
            <div className='tour-details'>
                <h4 className='price'>{props.tour.price}</h4>
                <h4 className='name'>{props.tour.name}</h4>
            </div>
            <div className='description'>
                {props.tour.info}
            </div>
        </div>

        <button className='notIntrested' onClick={() => props.getRemoveId(props.tour.id)}>Not Intrested</button>

        
        </div>
    )
}

export default Card