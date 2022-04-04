const AgentsRow = ({ agentName, agentEmail, agentRole }) => {
  return (
    <div className="agents-table-row">
      <div className="table-agents-col">
        <div className="agent-table-icon"></div>
        <div className="agent-name-email">
          <div className="agent-name">{agentName}</div>
          <div className="agent-email" id="agent-email">
            {agentEmail}
          </div>
        </div>
      </div>
      <div className="table-agents-col" id="agent-role">
        {agentRole}
      </div>
      <div className="table-agents-col" id="agent-last-seen">
        x hours ago.
      </div>
    </div>
  );
};

export default AgentsRow;
