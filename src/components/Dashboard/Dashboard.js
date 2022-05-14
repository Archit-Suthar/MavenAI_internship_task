import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  // data for data section-2
  const ds2Data = [
    {
      country: "Italy",
      value: 475,
      type: "positive",
      lineChart: "./Assets/green.png",
    },
    {
      country: "United States",
      value: 431,
      type: "positive",
      lineChart: "./Assets/green.png",
    },
    {
      country: "Canada",
      value: 174,
      type: "negative",
      lineChart: "./Assets/red.png",
    },
    {
      country: "Spain",
      value: 475,
      type: "positive",
      lineChart: "./Assets/green.png",
    },
    {
      country: "Japan",
      value: 134,
      type: "positive",
      lineChart: "./Assets/green.png",
    },
    {
      country: "South Africa",
      value: 471,
      type: "negative",
      lineChart: "./Assets/red.png",
    },
  ];

  // data for data section-3
  const ds3Data = [
    {
      userImg: "./Assets/user-icon.png",
      userName: "Andrew Johnstons",
      position: "Top Trader",
    },
    {
      userImg: "./Assets/user-icon.png",
      userName: "Anna Atkinsons",
      position: "Manager",
    },
    {
      userImg: "./Assets/user-icon.png",
      userName: "Mark Atkinsons",
      position: "Top Trader",
    },
    {
      userImg: "./Assets/user-icon.png",
      userName: "Johanna Tairons",
      position: "Manager",
    },
  ];

  // data for data section-4
  const ds4Data = [
    {
      countryFlag: "./Assets/usa.svg",
      countryName: "United States",
      progress: 93,
    },
    {
      countryFlag: "./Assets/italy.svg",
      countryName: "Italy",
      progress: 73,
    },
    {
      countryFlag: "./Assets/spain.svg",
      countryName: "Spain",
      progress: 13,
    },
  ];

  return (
    <div className="dashboard container-fluid p-5">
      {/* header  */}
      <div className="db-header d-flex mt-3">
        <div className="db-welcome d-inline-block">
          <div className="db-name">Dashboard</div>
          <span className="welcome-text">Welcome back, {user.name}</span>
        </div>

        <div className="db-btn-user fs-5 m-3 d-flex mx-auto">
          <div className="db-btn fs-5 mx-3">
            <button className="btn shadow">
              <img src="./Assets/e-add.svg" alt="" width="17px" />
              <span className="mx-3">Add Unit</span>
            </button>
          </div>
          <span>
            <img
              className="shadow rounded-circle"
              src="./Assets/user-icon.png"
              alt=""
              width="30px"
            />
          </span>
          <span className="mx-3">{user.name}</span>
        </div>
      </div>

      {/* section-1 data-section-1  */}
      <div className="db-ds db-ds1 row mt-5">
        <div className="balance col-12 col-md-6 col-xl-3 border-end">
          <span className="fs-5">BALANCE</span>
          <div className="data balance-data">$5900.00</div>
        </div>
        <div className="profits col-12 col-md-6 col-xl-3 border-end mx-auto">
          <span className="fs-5">PROFITS</span>
          <div className="data profits-data">
            $950.00
            <span className="fs-5 text-success mx-4">△+56%</span>
          </div>
        </div>
        <div className="losses col-12 col-md-6 col-xl-3 border-end">
          <span className="fs-5">LOSSES</span>
          <div className="data losses-data">
            $450.00
            <span className="fs-5 text-danger mx-4">▽+56%</span>
          </div>
        </div>
        <div className="currencies col-12 col-md-6 col-xl-3 ">
          <span className="fs-5">CURRENCIES</span>
          <div className="data currencies-data d-flex">
            <span>
              <img src="/Assets/bitcoin-2.svg" alt="" />
            </span>
            <span>
              <img src="/Assets/currency-dollar.svg" alt="" />
            </span>
            <span>
              <img src="/Assets/currency-euro.svg" alt="" />
            </span>
            <span>
              <img src="/Assets/currency-yen.svg" alt="" />
            </span>
          </div>
        </div>
      </div>

      {/* section-2 data-section-2  */}
      <div className="db-ds db-ds2 mx-auto mt-5">
        <ul className="list-unstyled row shadow ">
          {ds2Data.map((data) => (
            <li
              key={data.country}
              className="col-12 col-md-4 col-xl-2 justify-content-center"
            >
              <div className="countrywise-data p-5 border-1 border-dark">
                <div className="country-name fs-5">{data.country}</div>
                <div className="value fs-3 text-black">
                  {data.value}
                  <span
                    className={` text-${
                      data.type === "positive" ? "success" : "danger"
                    } fs-5 mx-2`}
                  >
                    {data.type === "positive" ? "△" : "▽"}
                  </span>
                </div>
                <div className="data-wave opacity-50">
                  <img src={data.lineChart} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* section-3-4 data-section-3-4  */}
      <div className="db-ds db-ds34 mt-3 row">
        {/* db-ds3  */}
        <div className="db-ds db-ds3 py-5 col-12 col-xl-6 text-black">
          <div className="db-ds34-header team-header fs-2">
            <span>Team Members</span>
            <button className="btn text-primary float-end fs-5">
              View All
            </button>
          </div>
          <div className="team-body">
            <ul className="list-unstyled mt-4">
              {ds3Data.map((data, index) => (
                <li key={`${data.userName}${index}`} className="my-4">
                  <div className="userInfo d-flex">
                    <div className="basicInfo d-flex">
                      <img
                        className="shadow rounded-circle mx-2"
                        src={data.userImg}
                        alt=""
                      />
                      <div className="userName my-auto mx-2 fs-5">
                        {data.userName}
                      </div>
                    </div>
                    <div
                      className={`userPosition ${
                        data.position === "Manager" ? "bluePos" : "greenPos"
                      } p-2`}
                    >
                      <span className="mx-2 fs-5">{data.position}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* db-ds4  */}
        <div className="db-ds db-ds4 py-5 col-12 col-xl-6 text-black">
          <div className="db-ds34-header cmp-header fs-2">
            <span>Comparision</span>
            <button className="btn text-primary float-end fs-5">
              View All
            </button>
          </div>
          <div className="cmp-body">
            <ul className="list-unstyled mt-4 shadow p-4">
              {ds4Data.map((data) => (
                <li key={data.countryName} className="my-4">
                  <div className="ctrInfo">
                    <div className="basicInfo d-flex">
                      <img className="mx-2" src={data.countryFlag} alt="" />
                      <div className="userName my-auto mx-2 fs-5">
                        {data.countryName}
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="progress bg-transparent col-10 mt-3"
                        style={{ height: "8px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${data.progress}%` }}
                          aria-valuenow={`${data.progress}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="progress-value col-2">
                        {data.progress}%
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
