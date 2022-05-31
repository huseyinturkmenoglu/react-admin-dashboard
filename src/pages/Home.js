import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Feature from "../components/Feature";
import Chart from "../components/Chart";
import Table from "../components/Table";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const handleMobileSidebar = () => {
    setOpenMobileSidebar(!openMobileSidebar);
  };

  return (
    <div className="home">
      <Sidebar openMobileSidebar={openMobileSidebar} />
      <div className="home__container">
        <MenuIcon className="mobile-menu" onClick={handleMobileSidebar}>Show Menu</MenuIcon>
        <Navbar />
        <div className="home__container__content">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="home__container__charts">
          <Feature />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="home__container__list">
          <div className="home__container__list__header">
            Latest Transactions
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
