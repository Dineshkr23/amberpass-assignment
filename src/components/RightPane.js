import React from "react";
import "../assets/rightPane.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from "@mui/material/Avatar";
import RecentTransactions from "./RecentTransactions";
import Income from "./Income";
import { NewUsers } from "./NewUsers";
import { Balance } from "./Balance";
import profilePic from '../assets/profilePic.jpg'

export const RightPane = () => {
  return (
    <div className="rightPane">
      <div className="header">
        <div className="searchDiv">
          <SearchOutlinedIcon className="iconsHover"/>
          <input type="text" placeholder=" Type to search..." />
        </div>
        <div className="profileDiv">
          <SettingsOutlinedIcon className="iconsHover"/>
          <ChatBubbleOutlineOutlinedIcon className="iconsHover"/>
          <NotificationsNoneOutlinedIcon className="iconsHover"/>
          <div className="textDiv">
            <p className="userText iconsHover">Dinesh Kumar</p>
            <p className="desgText iconsHover">Developer</p>
          </div>
          <Avatar className="iconsHover" src={profilePic}>UN</Avatar>
          <ExpandMoreOutlinedIcon className="iconsHover"/>
        </div>
      </div>
      <div className="gridContainer">
        <div className="incomeDiv">
          <Income />
        </div>
        <div className="newUsersDiv">
          <NewUsers />
        </div>
        <div className="balanceDiv">
          <Balance />
        </div>
        <div className="transactionsDiv">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};
