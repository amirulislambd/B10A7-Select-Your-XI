import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div>
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and news right in your inbox!</p>
        <div className="flex">
          <input
            className="bg-white p-2 rounded-l-xl"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
          />
          <button className="btn border-none rounded-l-none bg-gradient-to-r from-yellow-500 to-pink-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
