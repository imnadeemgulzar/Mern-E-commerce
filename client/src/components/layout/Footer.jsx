import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-slate-200 z-10 fixed w-full bottom-0 h-20">
      <footer className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="w-[30%]">Copyright &copy; Mern-E-Commerce</div>
        <ul className=" w-[40%] flex items-center justify-between">
          <Link to="/termsAndConditions">
            <li className="px-4 py-2">Terms and Conditions</li>
          </Link>
          <Link to="/privacyPolicy">
            <li className="px-4 py-2">Privacy Policy</li>
          </Link>
          <Link to="/shopNow">
            <li className="px-4 py-2">Shop Now</li>
          </Link>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
