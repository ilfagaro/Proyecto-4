import './lottery.css'
import React from 'react';
import Footer from '../../components/footer/Footer'
import TableHome from '../../components/tableHome/TableHome';
import TableLottery from '../../components/tableLottery/TableLottery';
import { useState } from 'react';

function Lottery() {

    // Estado para almacenar los usuarios seleccionados para el sorteo
    const [selectedUser, setSelectedUser] = useState([]);

    // Función para agregar un usuario al sorteo
    const addUserToList = (lotteryUser) => {

        setSelectedUser([...selectedUser, lotteryUser])
    }

    // Estado para almacenar al ganador del sorteo
    const [winner, setWinner] = useState(null);

    // Función para iniciar el sorteo y seleccionar un usuario aleatorio
    const startLottery = () => {

        if (selectedUser.length > 0) {

            const randomIndex = Math.floor(Math.random() * selectedUser.length);
            const winnerUser = selectedUser[randomIndex];
            setWinner(winnerUser);

        } else {
            alert('No hay usuarios seleccionados')
        }

    }




    return (
        <div >
            <h1>Header</h1>
            <TableHome onAddUser={addUserToList} showDeleteButton={false} />
            <TableLottery lotteryUser={selectedUser} onStartLottery={startLottery} />
            <Footer />
        </div>

    );
}

export default Lottery;