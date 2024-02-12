import "./tableLottery.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TableLottery({ lotteryUser, onStartLottery, onDeleteUser, winner }) {
  return (
    <Container>
      <div className="tableLottery p-3">
        <Table className="table-default rounded-2 ">
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
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.secondSurname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.curso}</td>
                <td>
                  <button
                    className="buttonDelete" onClick={() => onDeleteUser(user.id)}>
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
            <Button className="button-start-lottery" onClick={onStartLottery}>
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
