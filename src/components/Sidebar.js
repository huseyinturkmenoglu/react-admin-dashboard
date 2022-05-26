import { useContext } from "react";
import logo from "../images/logo.svg";
import {
  DashboardCustomizeOutlined,
  AccountBalanceOutlined,
  PersonOutline,
  LocalShipping,
  CreditCard,
  Store,
  InsertChart,
  SettingsApplications,
  ExitToApp,
  NotificationsNone,
  SettingsSystemDaydreamOutlined,
  PsychologyOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navitage = useNavigate();
  const { dispatch } = useContext(DarkModeContext);
  const { dispatchAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatchAuth({ type: "LOGOUT", payload: null });
    navitage("/");
  };

  return (
    <div className="sidebar">
      <SideBarLink to="/">
        <div className="sidebar__header">
          <div className="sidebar__header__logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </SideBarLink>
      <div className="sidebar__body">
        <ul>
          <p className="title">MAIN</p>
          <SideBarLink to="/">
            <li>
              <DashboardCustomizeOutlined className="icon" />
              <span>Dashboard</span>
            </li>
          </SideBarLink>
          <p className="title">LISTS</p>
          <SideBarLink to="/users">
            <li>
              <PersonOutline className="icon" />
              <span>Users</span>
            </li>
          </SideBarLink>
          <SideBarLink to="/products">
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </SideBarLink>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBalanceOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogin}>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

const SideBarLink = styled(Link)`
  text-decoration: none;
`;

export default Sidebar;
