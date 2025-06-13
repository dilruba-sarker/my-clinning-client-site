import axios from 'axios';
import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CardDetails = () => {
const {id:EventId}=useParams()
 const axiosSecure=useAxiosSecure()
    const data=useLoaderData()
    const {user}=use(AuthContext)
    console.log(data);
    const eventData={EventId,
        applicant:user.email,
        image:data.image,
        title:data.title,
        description:data.description,
        date:data.date,

       

    }
    const handleEvent=()=>{

       axiosSecure.post(`${import.meta.env.VITE_API_URL}/events`,eventData )
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
  title: "Good job!",
  text: "You have joined the Event!",
  icon: "success"
});
            }
        }).catch(err=>{
            console.log(err.message);
        })

    }
    return (
        <div>
         
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={data.image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{data.title}!</h1>
      <p className="py-6">
        {data.description}
      </p>
   <p> Location: {data.
location}</p>
   <p>Type: {data.type}</p>
      <button onClick={handleEvent} className="btn btn-primary mt-2">Join event</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;