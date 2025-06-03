import React, { use, useState } from 'react';
import logo from "../../assets/wordart.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
// const Navbar = () => {
//  const { user, logOut } = use(AuthContext);

// const link=<>

//       <li className='text-xl font-semibold hover:bg-blue-400 hover:text-white text-blue-500'><NavLink to="/">Home</NavLink></li>
// <li className='text-xl font-semibold hover:bg-blue-400 hover:text-white text-blue-500' ><NavLink to="/UpcomingEvents">Upcoming Events </NavLink></li>
//   <li className='text-xl font-semibold hover:bg-blue-400 hover:text-white text-blue-500' ><NavLink to="/register">Register </NavLink></li>
// </>

//  const handleLogout = () => {
//     logOut()
//       .then(
//         () => console.log("logout ")

//       )
//       .catch(err => console.log(err.message));
//   };

//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         {link}
//       </ul>
//     </div>
//     <img className='w-48' src={logo} alt="" />
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {link}
//     </ul>
//   </div>


 
//     <div className="navbar-end">
//         {user?.email ? (
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               {/* <div className="w-10 rounded-full border border-gray-300 tooltip tooltip-left" data-tip={user.displayName || 'User'}>
//                 <img src={user.photoURL || "/default-avatar.png"} alt="User" />
//               </div> */}
//               <img
//   className="w-10 h-10 z-50 rounded-full border border-gray-300 tooltip tooltip-left"
//   data-tip={user.displayName || 'User'}
//   src={user.photoURL || "/default-avatar.png"}
//   alt="User"
// />

//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//               <li><NavLink to="/create-event">Create Event</NavLink></li>
//               <li><NavLink to="/manage-events">Manage Events</NavLink></li>
//               <li><NavLink to="/joined-events">Joined Events</NavLink></li>
            
//             </ul>
          

//             {/* Logout Button */}
          
//               <button
//                 onClick={handleLogout}
               
//                  className=" btn btn-primary btn-sm z-50"
//               >
//                 Logout
//               </button>
            
//           </div>
//         ) : (
//           <div className=" ">
           
//             <Link to="/login"><button className="btn btn-primary">Login</button></Link>
//           </div>
//         )}
//       </div>
// </div>
//     );
// };

// export default Navbar;





const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("logout successful"))
      .catch(err => console.log(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-xl font-semibold hover:bg-blue-400 hover:text-white ${isActive ? 'text-blue-700' : 'text-blue-500'}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/UpcomingEvents" 
          className={({ isActive }) => 
            `text-xl font-semibold hover:bg-blue-400 hover:text-white ${isActive ? 'text-blue-700' : 'text-blue-500'}`
          }
        >
          Upcoming Events
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/register" 
          className={({ isActive }) => 
            `text-xl font-semibold hover:bg-blue-400 hover:text-white ${isActive ? 'text-blue-700' : 'text-blue-500'}`
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img className="w-48" src={logo} alt="Website Logo" />
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* User section */}
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName || 'User'}
              >
                <div className="w-10 rounded-full">
                  <img 
                    src={user.photoURL || "/default-avatar.png"} 
                    alt="User Profile" 
                  />
                </div>
              </div>
              <ul 
                tabIndex={0} 
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><NavLink to="/create-event">Create Event</NavLink></li>
                <li><NavLink to="/manage-events">Manage Events</NavLink></li>
                <li><NavLink to="/joined-events">Joined Events</NavLink></li>
              </ul>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-primary btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;