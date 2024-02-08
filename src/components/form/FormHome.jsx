import { useState } from "react";
import "./form.css";
import UserService from "../../service/userService";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";

export default function FormHome() {
  const userService = UserService;

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    secondSurname: "",
    email: "",
    phone: "",
    curso: "",
  });

  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (
        formData.name &&
        formData.surname &&
        formData.secondSurname &&
        formData.email &&
        formData.phone &&
        formData.curso
      ) {
        Swal.fire("Enviando");
        userService
          .createUser(formData)
          .then(() => {
            Swal.fire("Enviando", "...", "¡Enviado!");
            resetForm();
          })
          .catch((error) => {
            Swal.fire("Error en el envío: ", error);
          });
      }
    }
    setValidated(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      surname: "",
      secondSurname: "",
      email: "",
      phone: "",
      curso: "",
    });
  };

  return (
    <section className="formHome px-5 mt-4 gap-3">
      <h1 className="fs-4 mb-4 fw-bold text-center p-3">SOMBRERO SELECCIONADOR</h1>
      <Form
        className="w-75 row"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3 col-xl-3 col-lg-6 col-sm-12"
          controlId="formBasicName validationCustomName"
        >
          <Form.Label className="fw-bold" id="name">
            Nombre
          </Form.Label>
          <Form.Control
            required
            type="text"
            class="form-control"
            name="name"
            id="inputName"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 col-xl-3 col-lg-6 col-sm-12"
          controlId="formBasicSurname validationCustomSurname"
        >
          <Form.Label className="fw-bold">Primer Apellido</Form.Label>
          <Form.Control
            type="text"
            class="form-control"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            id="inputSurname1"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Surname.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 col-xl-3 col-lg-6 col-sm-12"
          controlId="formBasicSecondSurname validationCustomSecondSurname"
        >
          <Form.Label className="fw-bold">Segundo Apellido</Form.Label>
          <Form.Control
            type="text"
            class="form-control"
            name="secondSurname"
            value={formData.secondSurname}
            onChange={handleInputChange}
            id="inputSurname2"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Second surname.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 col-xl-3 col-lg-6 col-sm-12"
          controlId="formBasicEmail validationCustomEmail"
        >
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            class="form-control"
            name="email"
            id="inputEmail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 col-xl-3 col-lg-6 col-sm-12"
          controlId="formBasicPhone validationCustomPhone"
        >
          <Form.Label className="fw-bold">Teléfono</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{9}"
            class="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            id="inputCurso"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Telephone.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3 col-xl-3 col-lg-6 col-sm-12"
          controlId="formBasicCourse validationCustomCourse"
        >
          <Form.Label className="fw-bold">Curso</Form.Label>
          <Form.Control
            type="text"
            class="form-control"
            name="curso"
            value={formData.curso}
            onChange={handleInputChange}
            id="inputClase"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Course.
          </Form.Control.Feedback>
        </Form.Group>

        <div className="col-xl-3 col-lg-6 col-sm-12">
          <Button
            className="buttonSend mt-4 mb-4 w-100 h-70"
            type="submit"
            onClick={handleSubmit}
          >
            Enviar
            <img src="/src/images/btn-submit-row-blanco.png" />
          </Button>
        </div>
      </Form>
    </section>
  );
}
