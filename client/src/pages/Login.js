const Login = () => {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="form-group mt-2">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-2">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;