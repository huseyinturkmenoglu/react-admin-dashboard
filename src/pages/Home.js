import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Widget from '../components/Widget';
import Feature from '../components/Feature';
import Chart from '../components/Chart';
import Table from '../components/Table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className='home__container'>
        <Navbar />
        <div className='home__container__content'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='home__container__charts'>
          <Feature />
          <Chart />
        </div>
        <div className='home__container__list'>
          <div className='home__container__list__header'>Latest Transactions</div>
          <Table />
        </div>
      </div>      
    </div>
  )
}

export default Home