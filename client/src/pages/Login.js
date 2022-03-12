import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <>
      <div className="form-container">
        <form>
          <FormRow label="Email" type="email" placeholder="Email" />
          <FormRow label="Password" type="password" placeholder="Password" />
          <button type="submit" className="btn btn-primary mt-4">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
