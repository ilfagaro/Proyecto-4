import React, { useState } from 'react';
import './form.css'
import UserService from '../../service/userService';
import Swal from 'sweetalert2'

export default function FormHome () {

  const userService = UserService

  const [formData, setFormData] = useState(
    {
    name: '',
    surname: '',
    secondSurname: '',
    email: '',
    phone: '',
    curso: ''
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e)=>{

    Swal.fire('Enviando');
    userService.createUser(formData);
  }

    return (
        <section  className="px-5 formHome">
          <h1 class="fs-4 mb-4 fw-bold text-center p-3">SOMBRERO SELECCIONADOR</h1>
          <form>
            <div class="container mt-4 gap-3 ">
                <div class="row">
                  <div class="col-xl-3 col-lg-6 col-sm-12">
                    <label class="fw-bold" for="floatingInput">Nombre</label>
                    <input type="text" class="form-control" name="name" id="inputName" value={formData.name} onChange={handleInputChange} />
                  </div>
    
                  <div class="col-xl-3 col-lg-6 col-sm-12">
                    <label class="fw-bold"  >Primer Apellido</label>
                    <input type="text" class="form-control" name="surname" value={formData.surname}  onChange={handleInputChange} id="inputSurname1" required />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-sm-12">
                    <label class="fw-bold" for="floatingInput">Segundo Apellido</label>
                    <input type="text" class="form-control" name="secondSurname" value={formData.secondSurname} onChange={handleInputChange}  id="inputSurname2" required/>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-sm-12">
                    <label class="fw-bold" for="floatingInput">Email</label>
                    <input type="email" class="form-control" name="email" id="inputEmail" value={formData.email}  onChange={handleInputChange} required/>
                  </div>
                </div>
              </div>
              <div class="container mt-4">
                <div class="row">

                  <div class="col-xl-3 col-lg-6 col-sm-12">
                    <div class="form-group">
                      <label class="fw-bold" for="inputCurso">Teléfono</label>
                      <input type="text" class="form-control" name="phone" value={formData.phone}  onChange={handleInputChange} id="inputCurso" required/>
                    </div>
                  </div> 

                  <div class="col-xl-3 col-lg-6 col-sm-12">
                    <div class="form-group">
                      <label class="fw-bold" for="inputClase">Curso</label>
                      <input type="text" class="form-control" name="curso" value={formData.curso}  onChange={handleInputChange} id="inputClase" required />
                    </div>
                  </div>
                  
                 <div class="col-xl-3 col-lg-6 col-sm-12">
                    <button type="submit" class="buttonSend mt-4 mb-4 w-100 h-70" onClick={handleSubmit}>Enviar
                      <img src="/src/images/btn-submit-row-blanco.png" />
                    </button>
                 </div>
                </div>
              </div>    
          </form>
      </section>
        
    );
}