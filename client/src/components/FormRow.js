const FormRow = ({label, type, name, value, handleChange}) => {
  

  return (
    <>
      <div className="form-group mt-4">
        <label htmlFor="exampleInputEmail1">{label}</label>
        <input
          type={type}
          className="form-control"
          name={name}
          value={value}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default FormRow;
