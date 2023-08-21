import React from "react";
import Layout from "../layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="mt-60 max-w-7xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-[90px] text-red-500 font-bold mb-5">404</h1>
        <p className="text-3xl text-red-500">oops! page not found</p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
