import { BsPencil, BsPerson, BsQuestionCircle } from "react-icons/bs";

import { BiTransfer } from "react-icons/bi";
import ProfileTooltipRow from "./ProfileTooltipRow";
import React from "react";
import avatar from "../assets/Netflix-avatar.png";

function ProfileTooltip() {
  return (
    <div className="profile-tooltip">
      <div className="profile-tooltip__section">
        <ProfileTooltipRow
          leading={<img src={avatar} alt="" />}
          text="Mamamala"
        />
        <ProfileTooltipRow
          leading={<img src={avatar} alt="" />}
          text="Pinklepants"
        />
        <ProfileTooltipRow
          leading={<img src={avatar} alt="" />}
          text="Chubkins"
        />
      </div>
      <div className="profile-tooltip__section">
        <p>DVD</p>
        <br />
        <ProfileTooltipRow leading={<BsPencil />} text="Manage Profiles" />
        <ProfileTooltipRow leading={<BiTransfer />} text="Transfer Profile" />
        <ProfileTooltipRow leading={<BsPerson />} text="Account" />
        <ProfileTooltipRow leading={<BsQuestionCircle />} text="Help Center" />
      </div>
      <div className="profile-tooltip__sign-out">
        <p>Sign out of Netflix</p>
      </div>
    </div>
  );
}

export default ProfileTooltip;
