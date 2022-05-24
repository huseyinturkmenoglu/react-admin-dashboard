import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Datatable from '../components/Datatable';

function List() {
  return (
    <div className='list'>
      <Sidebar />
      <div className='list__container'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List