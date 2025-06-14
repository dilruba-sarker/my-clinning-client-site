


import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { useNavigate } from 'react-router';

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const type = form.type.value;
    const image = form.image.value;
    const location = form.location.value;

    const newErrors = {};

    if (!title || title.trim().split(/\s+/).length <= 1) {
      newErrors.title = "Title must be more than 1 word";
    }

    if (!description || description.trim().split(/\s+/).length <= 4) {
      newErrors.description = "Description must be more than 4 words";
    }

    if (!location || location.trim().length <= 2) {
      newErrors.location = "Location must be more than 2 letters";
    }
 if (!image) newErrors.image = "Image URL is required";
    if (!startDate || startDate < new Date().setHours(0, 0, 0, 0)) {
      newErrors.date = "Please select a valid future date";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const eventData = {
      title,
      description,
      type,
      image,
      location,
      date: startDate,
      email: user.email,
    };

    axiosSecure.post(`/roads`, eventData)
      .then(res => {
        if (res.data.insertedId) {
          toast.success('Event Created Successfully!');
          // form.reset();
          // setTimeout(() => navigate('/UpcomingEvents'), 1000);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold text-blue-600'>Create An Event</h1>
      <Toaster />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Event now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="form">
                <label className="label">Title</label>
                <input type="text" name='title' className="input" placeholder="title" />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

                <label className="label">Description</label>
                <input type="text" name='description' className="input" placeholder="description" />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

                <label className="label">Event type</label>
                <select name="type" defaultValue="" className="select">
                  <option value="" disabled>Pick Event type</option>
                  <option value="Cleanup">Cleanup</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                </select>

                <label className="label">Thumbnail Image URL</label>
                <input type="text" name='image' className="input" placeholder="thumbnail Image URL" />
{errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                <label className="label">Location</label>
                <input type="text" name='location' className="input" placeholder="location" />
                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

                <label className="label" htmlFor="date">Event date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input w-full"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

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
