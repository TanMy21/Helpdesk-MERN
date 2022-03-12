const FormRow = (props) => {

  const { label, inputType, placeholder} = props

  return (
    <>
      <div className="form-group mt-4">
        <label for="exampleInputEmail1">{label}</label>
        <input
          type={inputType}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default FormRow;
