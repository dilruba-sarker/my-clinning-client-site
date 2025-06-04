import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router';


const ManageEvents = () => {


     const [events,setEvents]=useState([])
        const {user}=use(AuthContext)
        useEffect(()=>{
            axios.get(`${import.meta.env.VITE_API_URL}/my-roads?email=${user.email}`)
            .then(res=>{
                setEvents(res.data);
            })
        },[user.email])
    return (
        <div>
            <h1>all my my events {events.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{events.map(data=>

     <div className="card bg-base-100 w-72 shadow-sm">
                      <figure>
                        <img
                        className='h-36 w-full'
                          src={data.image}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                    {data.title}
                         
                        </h2>
                         <div className="">Type: {data.type}</div>
                         <div className="">Location: {data.location}</div>
                        <div>{data.description}</div>
                   
                  
                     <p>Date: {new Date(data.date).toDateString()}</p>
                          
                        
                          
                            <Link to={`/update/${data._id}`}><button className="btn btn-neutral mt-4">Update Event</button> </Link>
                        </div>
                      </div>
                    
                
)}

            </div>
        </div>
    );
};

export default ManageEvents;