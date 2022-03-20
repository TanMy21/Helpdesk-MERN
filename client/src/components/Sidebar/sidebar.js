import React, { useState } from "react";
import SidebarExpanded from "./SidebarExpanded";
import SidebarSmall from "./SidebarSmall";
const Sidebar = () => {
  const [sbCompact, setSbCompact] = useState(0);
  const changeWidth = () => {
    if (sbCompact === 0) {
      setSbCompact(1);
    } else {
      setSbCompact(0);
    }
    console.log(sbCompact);
  };
  return (
    <div className="col sidebar">
      {sbCompact ? (
        <SidebarExpanded changeWidth={changeWidth} />
      ) : (
        <SidebarSmall changeWidth={changeWidth} />
      )}
    </div>
  );
};

export default Sidebar;
