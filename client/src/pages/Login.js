import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, message, navigate, dispatch]);

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <FormRow
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />
          <FormRow
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-color mt-4">
            LOGIN
          </button>
        </form>
        <div className="new">
          <h6>
            <span> New to Helpdesk? </span>
          </h6>
          <div className="d-flex justify-content-center">
            <Link to="/register">
              <button type="submit" className="btn btn-secondary mt-4">
                Create a New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
