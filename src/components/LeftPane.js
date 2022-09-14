import React from "react";
import "../assets/leftPane.css";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Avatar from "@mui/material/Avatar";

export const LeftPane = () => {
  return (
    <div className="leftPane">
      <div className="appName_div">
        <div className="commonIconName">
          <span className="iconsHover">
            <Avatar variant="rounded">A</Avatar>
          </span>
          <p className="iconsHover">App Name</p>
        </div>
      </div>
      <div className="appMain_div">
        <p className="leftTextHeader">MAIN</p>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <AccountCircleIcon />
            </span>
            <p className="iconsHover">Dashboard</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <LanguageIcon />
            </span>
            <p className="iconsHover">Discover</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <AccountBoxOutlinedIcon />
            </span>
            <p className="iconsHover">Users</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <ImportContactsOutlinedIcon />
            </span>
            <p className="iconsHover">Documents</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <GridViewIcon />
            </span>
            <p className="iconsHover">Applications</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
        <div className="leftMain_list">
          <div className="commonIconName">
            <span className="iconsHover">
              <InsertDriveFileOutlinedIcon />
            </span>
            <p className="iconsHover">Pages</p>
          </div>
          <span className="iconsHover">
            <ExpandMoreOutlinedIcon />
          </span>
        </div>
      </div>
      <div className="appSecondary_div">
        <p className="leftTextHeader">SECONDARY</p>
        <div className="commonIconName">
          <span className="iconsHover">
            <HelpOutlineIcon />
          </span>
          <p className="iconsHover">Support Center</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <InboxOutlinedIcon />
          </span>
          <p className="iconsHover">Inbox</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <FolderOutlinedIcon />
          </span>
          <p className="iconsHover">File Manager</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <FormatListBulletedOutlinedIcon />
          </span>
          <p className="iconsHover">Data List</p>
        </div>
      </div>
      <div className="appLogout_div">
        <div className="commonIconName">
          <span className="iconsHover">
            <SettingsOutlinedIcon />
          </span>
          <p className="iconsHover">Settings</p>
        </div>
        <div className="commonIconName">
          <span className="iconsHover">
            <ExitToAppOutlinedIcon />
          </span>
          <p className="iconsHover">Log Out</p>
        </div>
      </div>
    </div>
  );
};
