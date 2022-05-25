import styled from "styled-components";
import {
  KeyboardArrowUp,
  PersonOutlined,
  AccountBalanceWalletOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        amount: 100,
        diff: 20,
        link: "See all users",
        icon: <Users className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        amount: 150,
        diff: 30,
        link: "View all orders",
        icon: <Orders className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        amount: 125,
        diff: 5,
        link: "View net earnings",
        icon: <Earning className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        amount: 750,
        diff: 15,
        link: "See details",
        icon: <Balance className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.icon}{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {data.diff} %
        </div>
        <a href="#test" className="link">
          {data.link}
        </a>
      </div>
    </div>
  );
};

const Users = styled(PersonOutlined)`
  color: #ed143d;
  background-color: rgba(255, 0, 0, 0.2);
`;
const Orders = styled(ShoppingCartOutlined)`
  color: #daa520;
  background-color: rgba(218, 165, 32, 0.2);
`;
const Earning = styled(MonetizationOnOutlined)`
  color: #008000;
  background-color: rgba(0, 128, 0, 0.2);
`;
const Balance = styled(AccountBalanceWalletOutlined)`
  color: #800080;
  background-color: rgba(128, 0, 128, 0.2);
`;

export default Widget;
