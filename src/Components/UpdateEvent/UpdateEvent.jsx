import React, { use } from 'react';


import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {   useParams } from 'react-router';
const UpdateEvent = () => {
     const { id } = useParams();
     console.log(id);
    const {user}=use(AuthContext)
 const [startDate, setStartDate] = useState(new Date());
    const handleSubmit=e=>{
        e.preventDefault()
const form = e.target;
      const title = e.target.title.value;
    const description = e.target.description.value;
    const type = e.target.type.value;
    const image = e.target.image.value;
    const location = e.target.location.value;

        const eventData={  
      title,
      description,
      type,
      image,
      location,
      date: startDate , // Use the state value directly
      email:user.email
    }
    console.log(eventData);

  
   
axios.put(`${import.meta.env.VITE_API_URL}/roads/${id}`, eventData)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount>0
){

  toast.success('data update Successfully !')
  form.reset();
}
    })
    .catch(err => console.log(err.message))
    }
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold text-blue-600'>Create An Event</h1>
<Toaster/>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">update Event now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          <label className="label">Title</label>
          <input type="text" name='title' className="input" placeholder="title" />
          <label className="label">Description</label>
          <input type="text" name='description' className="input" placeholder="description" />
          <label className="label">Event type</label>
          <select defaultValue="Pick Event type" name='type' className="select">
  <option disabled={true}>Pick Event type</option>
  <option>Cleanup</option>
  <option>Plantation</option>
  <option>Donation</option>
</select>
          <label className="label">Thumbnail Image URL</label>
          <input type="text" name='image' className="input" placeholder="thumbnail Image URL" />
          <label className="label">Location</label>
          <input type="text" name='location' className="input" placeholder="location" />
          <label className="label" name="date"> Event date</label>
          
          <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input w-full" // This makes it look like your other inputs
                  dateFormat="MMMM d, yyyy" // Customize date format
                  minDate={new Date()} // Optional: prevent selecting dates in the past
                />
       <button className="btn btn-neutral mt-4">Update Event</button>
 

        </form>
      </div>
    </div>
  </div>
</div>

           
        </div>
    );
};

export default UpdateEvent;