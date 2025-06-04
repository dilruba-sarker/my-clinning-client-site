// import React, { use } from 'react';


// import  { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from '../../Context/AuthContext';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import {useParams } from 'react-router';
// import { title } from 'motion/react-client';
// const UpdateEvent = () => {
//      const { id } = useParams();
 
//      console.log(id);
//     const {user}=use(AuthContext)
//  const [startDate, setStartDate] = useState(new Date());
//     const handleSubmit=e=>{
//         e.preventDefault()
// const form = e.target;
//       const title = e.target.title.value;
//     const description = e.target.description.value;
//     const type = e.target.type.value;
//     const image = e.target.image.value;
//     const location = e.target.location.value;

//         const eventData={  
//       title,
//       description,
//       type,
//       image,
//       location,
//       date: startDate , // Use the state value directly
//       email:user.email
//     }
//     console.log(eventData);

  
   
// axios.patch(`${import.meta.env.VITE_API_URL}/roads/${id}`, eventData)
//     .then(res => {
//         console.log(res.data);
//         if(res.data.modifiedCount>0
// ){

//   toast.success('data update Successfully !')
//   form.reset();
// }
//     })
//     .catch(err => console.log(err.message))
//     }
//     return (
//         <div className='text-center'>
//             <h1 className='text-2xl font-bold text-blue-600'>Create An Event</h1>
// <Toaster/>
//           <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col ">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">update Event now!</h1>
     
//     </div>
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//         <form onSubmit={handleSubmit} className="form">
//           <label className="label">Title</label>
//           <input type="text"  name='title' className="input" placeholder="title" />
//           <label className="label">Description</label>
//           <input type="text" name='description' className="input" placeholder="description" />
//           <label className="label">Event type</label>
//           <select defaultValue="Pick Event type" name='type' className="select">
//   <option disabled={true}>Pick Event type</option>
//   <option>Cleanup</option>
//   <option>Plantation</option>
//   <option>Donation</option>
// </select>
//           <label className="label">Thumbnail Image URL</label>
//           <input type="text" name='image' className="input" placeholder="thumbnail Image URL" />
//           <label className="label">Location</label>
//           <input type="text" name='location' className="input" placeholder="location" />
//           <label className="label" name="date"> Event date</label>
          
//           <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   className="input w-full" // This makes it look like your other inputs
//                   dateFormat="MMMM d, yyyy" // Customize date format
//                   minDate={new Date()} // Optional: prevent selecting dates in the past
//                 />
//        <button className="btn btn-neutral mt-4">Update Event</button>
 

//         </form>
//       </div>
//     </div>
//   </div>
// </div>

           
//         </div>
//     );
// };

// export default UpdateEvent;

import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';

const UpdateEvent = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [eventData, setEventData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    // Fetch event data by id
    axios.get(`${import.meta.env.VITE_API_URL}/roads/${id}`)
      .then(res => {
        setEventData(res.data);
        if (res.data.date) {
          setStartDate(new Date(res.data.date));
        }
      })
      .catch(err => console.error('Failed to fetch event data:', err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedEvent = {
      title: form.title.value,
      description: form.description.value,
      type: form.type.value,
      image: form.image.value,
      location: form.location.value,
      date: startDate,
      email: user.email,
    };

    axios.patch(`${import.meta.env.VITE_API_URL}/roads/${id}`, updatedEvent)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          toast.success('Data updated successfully!');
          // optionally reset form or do something else
        }
      })
      .catch(err => console.error(err));
  };

  // Show loading while fetching event data
  if (!eventData) return <p>Loading event data...</p>;

  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold text-blue-600'>Update Event</h1>
      <Toaster />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Event now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="form">
                <label className="label">Title</label>
                <input
                  type="text"
                  defaultValue={eventData.title}
                  name="title"
                  className="input"
                  placeholder="title"
                />

                <label className="label">Description</label>
                <input
                  type="text"
                  defaultValue={eventData.description}
                  name="description"
                  className="input"
                  placeholder="description"
                />

                <label className="label">Event type</label>
                <select
                  defaultValue={eventData.type}
                  name="type"
                  className="select"
                >
                  <option disabled>Pick Event type</option>
                  <option>Cleanup</option>
                  <option>Plantation</option>
                  <option>Donation</option>
                </select>

                <label className="label">Thumbnail Image URL</label>
                <input
                  type="text"
                  defaultValue={eventData.image}
                  name="image"
                  className="input"
                  placeholder="thumbnail Image URL"
                />

                <label className="label">Location</label>
                <input
                  type="text"
                  defaultValue={eventData.location}
                  name="location"
                  className="input"
                  placeholder="location"
                />

                <label className="label" htmlFor="date">Event date</label>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  className="input w-full"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
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
