import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Datatable from '../components/Datatable';

function List({addNewTitle, url}) {
  return (
    <div className='list'>
      <Sidebar />
      <div className='list__container'>
        <Navbar />
        <Datatable addNewTitle={addNewTitle} url={url} />
      </div>
    </div>
  )
}

export default List