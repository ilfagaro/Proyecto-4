import "./tableLottery.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TableLottery({ lotteryUser, onStartLottery, onDeleteUser, winner }) {
  return (
    <Container>
      <div className="tableLottery p-3">
        <Table responsive className="table-default rounded-2 ">
          <thead className="tableLottery-header">
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
            {lotteryUser.map((user) => (
              <tr key={user.id}>
                <td id="user-name">{user.name}</td>
                <td id="user-surname">{user.surname}</td>
                <td id="user-secondSurname">{user.secondSurname}</td>
                <td id="user-email">{user.email}</td>
                <td id="user-phone">{user.phone}</td>
                <td id="user-curso">{user.curso}</td>
                <td id="buttonDeleteLottery">
                  <button 
                    className="buttonDelete"  onClick={() => onDeleteUser(user.id)}>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="card-container">
        <Card className="main-card">
          <Card.Body className="card-body">
            <Button responsive className="button-start-lottery" onClick={onStartLottery}>
              Comenzar sorteo
            </Button>
            <Card.Text className="card-text">¡y el ganador/a es..!</Card.Text>
            <Card className="inner-card">
              <p className="winner-name-container">
                {winner ? `${winner.name} ${winner.surname}` : ''}
              </p>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default TableLottery;
