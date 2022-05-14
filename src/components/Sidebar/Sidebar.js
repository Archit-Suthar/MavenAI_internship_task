import React, { useState } from "react";
import Box from "./Box";
import "./Sidebar.css";

const Sidebar = () => {
  // using state 'open' to see sidebar open or not
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="sidebarBtn position-fixed">
        {/* toggle button to close or open the sidebar menu   */}
        <button className="btn btn-primary" onClick={() => setOpen(!open)}>
          {">"}
        </button>
      </div>

      {/* if sidebar is open then display */}
      {open && (
        <div
          className={`sidebar d-flex shadow position-fixed flex-column h-100`}
        >
          <div className="top mb-auto mt-4">
            <ul className="list-unstyled">
              <li>
                {/* active represents active box  */}
                <Box BoxName="Dashboard" active="Dashboard" />
              </li>
              <li>
                <Box BoxName="Analytics" active="Dashboard" />
              </li>
              <li>
                <Box BoxName="Trading" active="Dashboard" />
              </li>
              <li>
                <Box BoxName="Notifications" active="Dashboard" />
              </li>
            </ul>
          </div>
          <div className="bottom">
            <Box BoxName="Logout" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
