

import { useEffect, useState } from "react";
import UpcommingCard from './UpcommingCard';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");

  const fetchEvents = async (type = "", search = "") => {
    const queryParams = new URLSearchParams();
    if (type && type !== "All") queryParams.append("type", type);
    if (search) queryParams.append("search", search);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/roads?${queryParams.toString()}`);
    const data = await res.json();
    console.log('Fetched data:', data);
    setEvents(data); // ✅ Already filtered by server
  };

  useEffect(() => {
    fetchEvents(type, search);
  }, [type, search]);

  return (
    <div className="p-4">
      {/* Search + Filter */}
      <div className="flex gap-4 mb-4 justify-center">
        <select onChange={(e) => setType(e.target.value)} className="select select-bordered">
          <option value="All">All</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>

        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-64"
        />
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length > 0 ? (
          events.map(data => (
            <UpcommingCard key={data._id} data={data} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No upcoming events found.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;






