import './tableRow.css'
import UserService from '../../service/userService';


//se añade la propiedad showDeleteButton al componente table

function TableRow ({user, onChange, showDeleteButton}){

    const handleDelete= ()=>{
        UserService.deleteUser(user);
        onChange("Nuevo valor");
    }

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.secondSurname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.curso}</td>
            {/*Se pone una props showDeleteButton que dice si esta a true muestra boton de borrar y si esta a false muestra boton 
            de agregar */}
            {showDeleteButton ? (
                <td><button className="buttonDelete" onClick={handleDelete} ></button></td>
            ) :(
                <td><button className='buttonAdd'></button>
                </td>
            ) };
        </tr>
    )
    
}
export default TableRow;