const FilterFormRow = ({rowLabel}) => {
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
        <option value="agent1">Agent 1</option>
        <option value="agent2">Agent 2</option>
        <option value="agent3">Agent 3</option>
        <option value="agent4">Agent 4</option>
        <option value="unassigned">Unassigned</option>
      </select>
    </div>
  );
};

export default FilterFormRow;
