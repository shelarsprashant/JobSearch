import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-white bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold">
            Job<span className="text-[#007BFF]">Search</span>
          </h3>
        <p className="mt-2">© 2024 Job Search. All rights reserved.</p>
        <ul className="p-0 mt-4 list-none">
          <li className="inline mx-2">
            <a href="https://twitter.com" className="text-white hover:underline">
              Twitter
            </a>
          </li>
          <li className="inline mx-2">
            <a href="https://linkedin.com" className="text-white hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
