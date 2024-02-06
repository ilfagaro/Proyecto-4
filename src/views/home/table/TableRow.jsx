import '../table/tableRow.css'
import UserService from '../../../service/userService';



function TableRow ({user, onChange}){

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
            <td><button className="buttonDelete" onClick={handleDelete} ></button></td>
        </tr>
    )
    
}
export default TableRow;