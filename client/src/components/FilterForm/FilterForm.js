import FilterFormRow from "./FilterFormRow/FilterFormRow";
import { getAgents } from "../../features/agents/agentSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const FilterForm = () => {
  const created = [
    "Any Time",
    "Yesterday",
    "Today",
    "This Week",
    "This Month",
    "This Year",
  ];
  const status = ["All", "Open", "Pending", "Resolved", "Closed"];
  const priority = ["All", "Low", "Medium", "High", "Urgent"];

  const type = [
    "All",
    "Question",
    "Incident",
    "Problem",
    "Feature Request",
    "Refund",
  ];

  const ResolutionDue = [
    "All",
    "Overdue",
    "Today",
    "Tomorrow",
    "Next 12 hours",
    "Next 8 hours",
    "Next 4 hours",
    "Next hour",
  ];
  const source = ["All", "Phone", "Forum", "Email", "Social Media"];

  const agentsName = [];

  const dispatch = useDispatch();

  const { agents } = useSelector((state) => state.agents);

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch]);

  agents.map((agent) => agentsName.push(agent.name));

  return (
    <>
      <div className="filter-title">FILTERS</div>
      <div className="filter-form-container">
        <form action="" className="filter-form">
          <FilterFormRow rowLabel={"Agent"} Options={agentsName} />
          <FilterFormRow rowLabel={"Created"} Options={created} />
          <FilterFormRow
            rowLabel={"Resolution due by"}
            Options={ResolutionDue}
          />
          <FilterFormRow rowLabel={"Status"} Options={status} />
          <FilterFormRow rowLabel={"Priority"} Options={priority} />
          <FilterFormRow rowLabel={"Type"} Options={type} />
          <FilterFormRow rowLabel={"Source"} Options={source} />
          <hr />
          <input type="submit" value="Apply" id="filter-form-btn" />
        </form>
      </div>
    </>
  );
};

export default FilterForm;
