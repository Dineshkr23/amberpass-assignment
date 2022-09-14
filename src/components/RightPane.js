import React from "react";
import "../assets/rightPane.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from '@mui/material/Avatar';
import RecentTransactions from './RecentTransactions'

export const RightPane = () => {
  return (
    <div className="rightPane">
      <div className="header">
        <div className="searchDiv">
          <SearchOutlinedIcon/>
          <input type="text" placeholder=" Type to search..." />
        </div>
        <div className="profileDiv">
          <SettingsOutlinedIcon />
          <ChatBubbleOutlineOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          <div className="textDiv">
            <p className="userText">User Name</p>
            <p className="desgText">Developer</p>
          </div>
          <Avatar>UN</Avatar>
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
      <div className="gridContainer">
        <div className="incomeDiv">1</div>
        <div className="newUsersDiv">2</div>
        <div className="balanceDiv">3</div>
        <div className="transactionsDiv">
            <RecentTransactions/>
        </div>
      </div>
    </div>
  );
};
