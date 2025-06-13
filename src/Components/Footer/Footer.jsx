import React from 'react';

const Footer = () => {
    return (
       <div>
      <footer className="footer sm:footer-horizontal bg-gray-600 text-white p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Cleaning</a>
    <a className="link link-hover">Tree Plantation</a>
    <a className="link link-hover">Washing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Dhaka,12340,uxt</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
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