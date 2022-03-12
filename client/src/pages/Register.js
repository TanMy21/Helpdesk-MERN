import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <>
      <div className="form-container">
        <form>
          <FormRow label="First Name" type="text" placeholder="First Name" />
          <FormRow label="Last Name" type="text" placeholder="Last Name" />
          <FormRow
            label="Organization Name"
            type="text"
            placeholder="Organization Name"
          />
          <FormRow label="Email" type="email" placeholder="Email" />
          <FormRow label="Password" type="password" placeholder="Password" />
          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
