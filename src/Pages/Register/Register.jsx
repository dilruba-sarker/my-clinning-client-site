import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';



import { Link, useNavigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
const Register = () => {
 const {createUser,updateUser,user,setUser,googleSignin}=use(AuthContext)
 const navigate=useNavigate()
    const location=useLocation()


const handleSubmit=e=>{
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log({ name, email, photoURL, password });
 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!passwordRegex.test(password)) {
  Swal.fire(
    'Password must be at least 6 characters and include 1 uppercase and 1 lowercase letter.'
  );
  return;
}


    createUser(email,password)
    .then(res=>{
      const profile={displayName:name,

photoURL:photoURL

}
updateUser(profile)
.then(()=>{
 
  setUser({ ...user, ...profile })
})
    
      Swal.fire({
  title: "Good job!",
  text: "signup done sucessfully!!",
  icon: "success"
});
 setTimeout(()=>{navigate(`${location?.state?location?.state:"/"}`)},1000)
form.reset('')
    }).catch(err=>{
      console.log(err.message);
    
      Swal.fire({
  title: "Opps?",
  text: `${err.message}`,
  icon: "question"
});

    })

}

const handleGoogle=()=>{
  googleSignin()
  .then(res=>{
      Swal.fire({
  title: "Good job!",
  text: "signup done sucessfully!!",
  icon: "success"
});
 setTimeout(()=>{navigate(`${location?.state?location?.state:"/"}`)},1000)
  }).catch(err=>{
      Swal.fire({
  title: "Opps?",
  text: `${err.message}`,
  icon: "question"
});
  })
 }
    return (
        <div>
            <div className="hero bg-blue-200 min-h-screen">
  <div className="hero-content flex-col ">
    
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-600">Register now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="form">
          <label className="label" >Name</label>
          <input type="text" name='name' className="input" required placeholder="name" />
          <label className="label" >Email</label>
          <input type="email" name='email' className="input" required placeholder="Email" />
          <label className="label" >photoURL</label>
          <input type="text" name='photoURL' className="input" required placeholder="photoURL" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" required placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         <div className='w-4/5 flex justify-center'> <button className="btn bg-blue-600 text-white w-4/5 mt-4">Register</button></div>
          
        </form>
<p className='text-blue-700'> Already Have acoount? Go to <Link to="/login"> <button 
className="text-red-600 btn bg-blue-400">Login</button></Link></p>
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;