const AgentsRow = () => {
  return (
    <div className="agents-table-row">
      <div className="table-agents-col">
        <div className="agent-table-icon"></div>
        <div className="agent-name-email">
          <div className="agent-name">Agent Name</div>
          <div className="agent-email" id="agent-email">agent.name@email.com</div>
        </div>
      </div>
      <div className="table-agents-col" id="agent-role">Admin</div>
      <div className="table-agents-col" id="agent-last-seen">x hours ago.</div>
    </div>
  );
};

export default AgentsRow;
