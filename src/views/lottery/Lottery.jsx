import "./lottery.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import TableHome from "../../components/tableHome/TableHome";
import TableLottery from "../../components/tableLottery/TableLottery";
import { useState } from "react";
import Header from "../../components/header/Header";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';

function Lottery({ showDeleteButton }) {
  // Estado para almacenar los usuarios seleccionados para el sorteo
  const [selectedUser, setSelectedUser] = useState([]);

  // Función para agregar un usuario al sorteo
  const addUserToList = (lotteryUser) => {
    setSelectedUser([...selectedUser, lotteryUser]);
  };

  // Estado para almacenar al ganador del sorteo
  const [winner, setWinner] = useState(null);

  // Función para iniciar el sorteo y seleccionar un usuario aleatorio
  const startLottery = () => {
    if (selectedUser.length > 0) {
      const randomIndex = Math.floor(Math.random() * selectedUser.length);
      const winnerUser = selectedUser[randomIndex];
      setWinner(winnerUser);
    } else {
      alert("No hay usuarios seleccionados");
    }
  };

    // Función para manejar la eliminación de un usuario
    const deleteUser = (userId) => {
        // Crear una nueva lista de usuarios excluyendo el usuario con el ID especificado
        const deletedUser = selectedUser.filter(user => user.id !== userId);
        
        // Actualizar el estado con la nueva lista de usuarios
        setSelectedUser(deletedUser);
      };

  return (
    <div>
      <Container className="mb-5">
        <Col>
          <Header />
        </Col>
      </Container>

      <TableHome onAddUser={addUserToList} 
      showDeleteButton={false} />
      <TableLottery
        lotteryUser={selectedUser}
        onStartLottery={startLottery}
        showDeleteButton={false}
        onDeleteUser={deleteUser}/>
      <Footer />
    </div>
  );
}

export default Lottery;
