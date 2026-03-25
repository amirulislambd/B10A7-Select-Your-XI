import React from "react";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col py-5 md:py-10 mt-10 md:mt-20">
      <img src="" alt="" />
      <div className="flex flex-col md:flex-row  justify-between gap-4 container mx-auto">
      <div>
        <h2 className="font-semibold text-white">About Us</h2>
        <p className="text-gray-300">
          We are a passionate team <br /> dedicated to providing the best <br /> services to
          our customers.
        </p>
      </div>
      <div>
        <ul className="flex flex-col space-y-1.5 text-gray-300 ">
        <h2 className="font-semibold text-white ">Quick Links</h2>
          <li ><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="items-end">
          <h2 className="font-semibold text-white ">Subscribe</h2>
          <p className="text-gray-300">Subscribe to our newsletter for the <br /> latest updates.</p>
          <div className="flex">
            <input className="bg-white p-2 rounded-l-xl" type="email" name="email" id="" placeholder="Enter your email" />
            <button className="btn border-none rounded-l-none bg-gradient-to-r from-yellow-500 to-pink-500">Subscribe</button>
          </div>
        </div>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center">
      <div className="divider border-t border-white container mx-auto "></div>
        <p className="text-gray-300">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
