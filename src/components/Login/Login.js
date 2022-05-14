import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser, setLoggedIn }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      setLoggedIn(true);
      navigate("/profile");
    }
    const user = {
      name,
    };

    setUser(user);
  };

  return (
    <div className="container d-flex h-100">
      <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center mx-auto my-auto">
        <div className="card shadow border-0 p-2">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center pt-3">Login</h2>
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="name"
                  className="form-control"
                  id="floatingName"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="floatingName">Your name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-grid mt-4">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <span className="text-danger">
                  Enter Any Name for Login
                  <p>(No Need to enter password or email)</p>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
