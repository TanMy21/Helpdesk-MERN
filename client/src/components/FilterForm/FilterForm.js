const FilterForm = ({
  agentsName,
  setAgentFilter,
  setCreatedFilter,
  setStatusFilter,
  setPriorityFilter,
  setTypeFilter,
  setResolutionFilter,
  setSourceFilter,
  onSubmit,
}) => {
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     filterTickets({
  //       agentFilter,
  //       createdFilter,
  //       statusFilter,
  //       priorityFilter,
  //       typeFilter,
  //       resolutionFilter,
  //       sourceFilter,
  //       pg: 0,
  //     })
  //   );
  // };

  return (
    <>
      <div className="filter-title">FILTERS</div>
      <div className="filter-form-container">
        <form className="filter-form" onSubmit={onSubmit}>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Agent
            </label>
            <select
              id="form-select-agent"
              name="agents"
              className="filter-input-select"
              onChange={(e) => setAgentFilter(e.target.value)}
            >
              <option value="All">All</option>
              {typeof agentsName === typeof [] && (
                <>
                  {agentsName.map((agent) => (
                    <option key={agent} value={agent}>
                      {agent}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Created
            </label>
            <select
              id="form-select-agent"
              name="createdAt"
              className="filter-input-select"
              onChange={(e) => setCreatedFilter(e.target.value)}
            >
              <option value="Any Time">Any Time</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Status
            </label>
            <select
              id="form-select-agent"
              name="status"
              className="filter-input-select"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Open">Open</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Priority
            </label>
            <select
              id="form-select-agent"
              name="priority"
              className="filter-input-select"
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Type
            </label>
            <select
              id="form-select-agent"
              name="type"
              className="filter-input-select"
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Question">Question</option>
              <option value="Incident">Incident</option>
              <option value="Problem">Problem</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Refund">Refund</option>
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Resolution Due
            </label>
            <select
              id="form-select-agent"
              name="resolution due"
              className="filter-input-select"
              onChange={(e) => setResolutionFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Overdue">Overdue</option>
              <option value="Today">Today</option>
              <option value="Tommorow">Tommorow</option>
            </select>
          </div>
          <div className="filter-form-row">
            <label htmlFor="agents" id="form-input-title">
              Source
            </label>
            <select
              id="form-select-agent"
              name="resolution due"
              className="filter-input-select"
              onChange={(e) => setSourceFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Phone">Phone</option>
              <option value="Forum">Forum</option>
              <option value="Email">Email</option>
              <option value="Social Media">Social Media</option>
            </select>
          </div>
          <hr />
          {/* <input type="submit" value="Apply" id="filter-form-btn" /> */}
        </form>
      </div>
    </>
  );
};

export default FilterForm;
