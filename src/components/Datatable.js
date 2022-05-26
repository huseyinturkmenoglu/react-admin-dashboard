import { DataGrid } from "@mui/x-data-grid";
import { userColumns} from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Datatable = ({ addNewTitle, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data()});
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <TableLink to="/users/test">
              <div className="viewButton">View</div>
            </TableLink>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {addNewTitle}
        <Link to={url} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

const TableLink = styled(Link)`
  text-decoration: none;
`;

export default Datatable;
