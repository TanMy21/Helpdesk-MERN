const AgentsRow = () => {
  return (
    <div className="agents-table-row">
      <div className="agents-table-row-name">
        <div>
          <div className="table-agent-icon"></div>
        </div>
        <div className="agent-name-email">
          <div className="table-agent-name">Agent Name</div>
          <div className="table-agent-email">agent@email.com</div>
        </div>
      </div>
      <div className="agents-table-row-role">Admin</div>
      <div className="agents-table-row-last-seen">x hours ago</div>
    </div>
  );
};

export default AgentsRow;
