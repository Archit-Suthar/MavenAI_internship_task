import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

const Home = ({ user }) => {
  return (
    <div className="home h-100 d-flex">
      {/* sidebar  */}
      <Sidebar />

      {/* dashboard  */}
      <Dashboard user={user} />
    </div>
  );
};

export default Home;
