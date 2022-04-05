const FilterFormRow = ({ rowLabel, Options }) => {
  // console.log(Options);

  return (
    <div className="filter-form-row">
      <label htmlFor="agents" id="form-input-title">
        {rowLabel}
      </label>
      <select
        id="form-select-agent"
        name="cars"
        className="filter-input-select"
      >
        {typeof Options === typeof [] && (
          <>
            {Options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default FilterFormRow;
