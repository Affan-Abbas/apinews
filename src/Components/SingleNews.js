import React from "react";

const SingleNews=({item})=>{return(
     
    <div className="col s4">
        <div className='card medium'>
            <div className="card-image">
                <img src={item.image_url} alt={item.title} />
                <span className="card-title">{item.title}</span>
            </div>
            <div className="card-content">
                <p>{item.description}</p>
            </div>
            <div className="card-action">
                <a href={item.link} >Full Article</a>
            </div>
        </div>
        <p>{item.title}</p>
    </div>

)}

export default SingleNews;