import axios from "axios"

const UserService = {
    createUser: function (formData) {
      const baseURL = "http://localhost:3000/user";
        axios.post(baseURL, formData)
          .then(response => {

            console.log('Respuesta de la API POST:', response.data);

          })
          .catch(error => {
            console.error('Error al enviar la solicitud:', error);
          });
      },          
    
      getUsers: async function (user) {
        
        const baseURL = "http://localhost:3000/user";
        const response = await axios.get(baseURL)
          .then(response => {
            console.log('Respuesta de la API GET:', response.data);
            return response.data
          })
          .catch(error => {
            console.error('Error al enviar la solicitud:', error);
          }); 
        return response;
      },

      deleteUser: async function (user) {
        const userId = user.id;
        const baseURL = `http://localhost:3000/user/${userId}`;
        await axios.delete(baseURL)
          .then(response => {
            console.log('Respuesta de la API DELETE:', response.data);
          })
          .catch(error => {
            console.error('Error al ELIMINAR la solicitud:', error);
          }); 
      }
}
export default UserService;
