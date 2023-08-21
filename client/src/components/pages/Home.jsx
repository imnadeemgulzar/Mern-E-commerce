import React from "react";
import Layout from "../layout/Layout";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto flex items-center justify-center mt-24 flex-col">
        <img
          src="https://trinity.one/wp-content/uploads/2019/05/10-category-page-01-1-1024x576.png"
          alt="not -found"
        />
        <div className="flex items-center justify-between w-56 mt-8 cursor-pointer text-[#1DA595] hover:text-[#2DC295]">
          <h2 className="text-2xl">Shop With Us</h2>
          <Link to="/shop">
            <FaArrowRight size={20} className="" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
