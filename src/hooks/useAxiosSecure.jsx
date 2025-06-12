import axios from "axios";

const axiosInstance=axios.create(
    {baseURL:import.meta.env.VITE_API_URL}
)
import React, { use } from 'react';
import { AuthContext } from "../Context/AuthContext";

const useAxiosSecure = () => {
const {logOut}=use(AuthContext)
 const token=localStorage.getItem('token')
axiosInstance.interceptors.request.use(config=>{
    config.headers.Authorization=`Bearer ${token}`
    return config
})
// response
// axiosInstance.interceptors.response.use(
//     (response) => {
//       console.log("Response:", response);
//       return response;
//     },
//     (error)=>{
          
//       if (error.status === 401 || error.status === 403) {
//       logOut()
//       .then(console.log(`You Are logOut With ${error.status}`))
//       .catch(err=>console.log(err))
//       }

//       return Promise.reject(error);
//     }
// )
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      logOut()
        .then(() => {
          console.log(`You were logged out due to token error: ${status}`);
        })
        .catch((err) => console.error("Logout failed:", err));
    }

    return Promise.reject(error); // still throw error so UI can handle it
  }
);
    return axiosInstance
};

export default useAxiosSecure;