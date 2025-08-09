import React from 'react';

const Footer = () => {
    return (
       <div>
      <footer className="footer sm:footer-horizontal bg-gray-600 text-white p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <h1 className="">Cleaning</h1>
    <h1 className="">Tree Plantation</h1>
    <h1 className="">Washing</h1>
    <h1 className="">Advertisement</h1>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="">About us</a>
    <a className="">Contact</a>
    <a className="">Dhaka,12340,uxt</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <h1 className="">Terms of use</h1>
    <h1 className="">Privacy policy</h1>
    <h1 className="">Cookie policy</h1>
  </nav>

</footer>
<footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Cleaning Industries Ltd</p>
  </aside>
</footer>
       </div>
    );
};

export default Footer;