import Table from 'react-bootstrap/Table';
import './table.css'
import TableRow from '../tableRow/TableRow';
import Container from 'react-bootstrap/Container';
import UserService from '../../service/userService';
import { useState, useEffect } from 'react';

//Aqui se pasa la propiedad showDeleteButton al componente padre 
function TableHome ({onAddUser,showDeleteButton}) {
  const [userList, setUserList] = useState([]);

  const getUserlist = async () => {
      setUserList(await UserService.getUsers())
  };

  const handleChildChange = () => {
    getUserlist();
  }

  useEffect(() => {
    getUserlist();
  },[]); 
  

  return (
    <Container>
      <div className="tableHome p-3 table-responsive">
        <Table className="table-default table-hover rounded-2">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Curso</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {userList.map((user) => (
              <TableRow
                key={user.id}
                user={user}
                onChange={handleChildChange}
                onAddUser={onAddUser}
                showDeleteButton={showDeleteButton}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
export default TableHome;
