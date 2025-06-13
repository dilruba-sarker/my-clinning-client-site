
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const JoinedEvents = () => {
    const [events,setEvents]=useState([])
    const {user}=use(AuthContext)
    const axiosSecure=useAxiosSecure()
    useEffect(()=>{
        // const token=localStorage.getItem('token')
        axiosSecure(`/events?email=${user.email}`
        //     ,{
        //     headers:{
        //         Authorization:`Bearer ${token}`
        //     }
        // }
    )
        .then(res=>{
            setEvents(res.data);
        })
    },[axiosSecure, user.email])

    console.log(events);
    return (
        <div className='text-center'>
                  <h1 className="text-xl font-bold text-blue-800"> Total Joined Events:{events.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-16">
                {
                events.map((data,idx)=>


                     <div key={idx} className="card bg-blue-400 text-white w-72 shadow-sm">
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
                      
                        <div>{data.description}</div>
                   
         
         
                          
                         <p>Date: {new Date(data.date).toDateString()}</p>
                        
                        
                         {/* <Link to={`/update/${data._id}`}>  <button className='btn btn-primary'>Update</button></Link> */}
                        </div>
                      </div>
                    
                )
                }</div>

        </div>
    );
};

export default JoinedEvents;