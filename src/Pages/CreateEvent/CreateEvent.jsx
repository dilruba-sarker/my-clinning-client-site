import React, { use } from 'react';


import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthContext';

import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const CreateEvent = () => {
    const {user}=use(AuthContext)
     const axiosSecure=useAxiosSecure()
     const navigate=useNavigate()
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

  
   
axiosSecure.post(`/roads`, eventData)
    .then(res => {
        console.log(res.data);
        if(res.data.insertedId
){

  toast.success('Event Created Successfully !')
  form.reset();
  
     setTimeout(()=>{navigate('/UpcomingEvents')},1000)
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
      <h1 className="text-5xl font-bold">Add Event now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          <label className="label">Title</label>
          <input required type="text" name='title' className="input" placeholder="title" />
          <label className="label">Description</label>
          <input type="text" name='description' required className="input" placeholder="description" />
         <label className="label">Event type</label>
<select name="type" required defaultValue="" className="select">
  <option value="" disabled>Pick Event type</option>
  <option value="Cleanup">Cleanup</option>
  <option value="Plantation">Plantation</option>
  <option value="Donation">Donation</option>
</select>
          <label className="label">Thumbnail Image URL</label>
          <input type="text" name='image' className="input" required placeholder="thumbnail Image URL" />
          <label className="label">Location</label>
          <input type="text" name='location' required className="input" placeholder="location" />
          <label className="label" name="date"> Event date</label>
          
          <DatePicker
                  selected={startDate}
                  required
                  onChange={(date) => setStartDate(date)}
                  className="input w-full" // This makes it look like your other inputs
                  dateFormat="MMMM d, yyyy" // Customize date format
                  minDate={new Date()} // Optional: prevent selecting dates in the past
                />
          <button className="btn btn-neutral mt-4">Add Event</button>
        </form>
      </div>
    </div>
  </div>
</div>

           
        </div>
    );
};

export default CreateEvent;