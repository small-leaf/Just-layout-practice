import React from "react";
import "./SideBar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import SideBarOption from "./SideBarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./redux/slices/mailSlice";

function SideBar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        compose
      </Button>
      <SideBarOption
        Icon={InboxIcon}
        title="Inbox"
        number={21}
        selected={true}
      />
      <SideBarOption Icon={StarIcon} title="Starred" number={22} />
      <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={22} />
      <SideBarOption Icon={LabelImportantIcon} title="Important" number={22} />
      <SideBarOption Icon={NearMeIcon} title="Sent" number={22} />
      <SideBarOption Icon={NoteIcon} title="Drafts" number={22} />
      <SideBarOption Icon={ExpandMoreIcon} title="More" number={22} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
