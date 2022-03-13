import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import FormRow from "../components/FormRow";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    organizationName: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, organizationName, email, password } =
    registerData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      organizationName,
      email,
      password,
    };

    dispatch(register(userData));
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <FormRow
            label="First Name"
            type="text"
            name="firstname"
            value={firstname}
            handleChange={handleChange}
          />
          <FormRow
            label="Last Name"
            type="text"
            name="lastname"
            value={lastname}
            handleChange={handleChange}
          />
          <FormRow
            label="Organization Name"
            type="text"
            name="organizationName"
            value={organizationName}
            handleChange={handleChange}
          />
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
            Register
          </button>
        </form>
        <div className="already-member">
          <h6>
            <span> OR </span>
          </h6>
          <div className="d-flex justify-content-center">
            <Link to="/Login">
              <button type="submit" className="btn btn-secondary mt-4">
                Sign in to an Exisiting Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
