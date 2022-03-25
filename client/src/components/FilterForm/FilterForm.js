import FilterFormRow from "./FilterFormRow/FilterFormRow";

const FilterForm = () => {
  return (
    <>
      <div className="filter-title">FILTERS</div>
      <div className="filter-form-container">
        <form action="" className="filter-form">
          <FilterFormRow rowLabel={"Agent"} />
          <FilterFormRow rowLabel={"Created"} />
          <FilterFormRow rowLabel={"Resolution due by"} />
          <FilterFormRow rowLabel={"Status"} />
          <FilterFormRow rowLabel={"Priority"} />
          <FilterFormRow rowLabel={"Type"} />
          <FilterFormRow rowLabel={"Source"} />
          <hr />
          <input type="submit" value="Apply" id="filter-form-btn" />
        </form>
      </div>
    </>
  );
};

export default FilterForm;
