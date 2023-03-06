import React from "react";

function ProfileTooltipRow({ leading, text }) {
  return (
    <div className="profile-tooltip-row">
      {leading}
      <span>{text}</span>
    </div>
  );
}

export default ProfileTooltipRow;
