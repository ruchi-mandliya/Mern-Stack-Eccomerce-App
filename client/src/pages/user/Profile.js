import React from "react";
import UserMenu from "./../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";

const Profile = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-5 p-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Your Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
