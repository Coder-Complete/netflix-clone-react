import React, { useState } from "react";

function HeaderIcon({ component, tooltipContent }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: "relative" }}
      className="header-icon"
    >
      {component}
      {showTooltip && tooltipContent && (
        <div className="tooltip">{tooltipContent}</div>
      )}
    </div>
  );
}

export default HeaderIcon;
