import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="navbar__menu">
          <div className="navbar__menu-item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="navbar__menu-item">
            <DarkModeOutlinedIcon className="icon dark-mode" onClick={() => dispatch({type: "TOGGLE"})} />
          </div>
          <div className="navbar__menu-item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="navbar__menu-item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="navbar__menu-item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="navbar__menu-item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="navbar__menu-item">
            <img
              src="https://avatars.githubusercontent.com/u/12368632?v=4"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
