import React from "react";
import AdminMenu from "./../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-5 p-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Categories</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
