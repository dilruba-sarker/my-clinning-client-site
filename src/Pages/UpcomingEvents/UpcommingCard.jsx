import React from 'react';



const UpcommingCard = ({data}) => {
    const {_id  ,
title  ,
description  ,
type  ,
image  ,
location  ,
date  ,
email  
}=data

 const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
    return (
        <div className="card bg-base-100 w-72 shadow-sm">
  <figure>
    <img
    className='h-36 w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
{title}
     
    </h2>
     <div className="">Type: {type}</div>
     <div className="">Location: {location}</div>
    <div>{description}</div>
    <p>Date: {formatDate(date)}</p>
      <div className="btn btn-primary">View event</div>
    </div>
  </div>

    );
};

export default UpcommingCard;