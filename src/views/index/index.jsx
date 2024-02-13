import {useState} from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Llamamos a useState para controlar la validación del formulario y usamos 2 estados.
// el form lo pasamos a una variable y utilizamos condicionales:
// -si NO es válido, cancela las acciones por defecto del form: recargar page, etc.
// -Si no es el caso, pues navega a la pagina '/home' haciendo uso de use.Navigate guardado en la variable 'navigate'. Finalmente marcar el form como Válido.
// Form.control.feedback -son mensajes de error que se muestran si los campos del form no son válidos.


function Index() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e)=> {
    const form = e.currentTarget;
    if (form.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation();
    } else {
      navigate ('/home');
    }
    setValidated(true);
  }

  return (
    <div className="content">
      <Container className="d-flex justify-content-center">
        <Card className="cardCustom col-lg-5 col-md-8 col-sm-8 col-10">
          <img
            className="my-5 logoPrincipalWhite"
            src="/src/images/hogwarts2.png"
            alt=""
          />

          <Col md={10} xs={11} lg={11}>
            <Col className="d-flex justify-content-center">
              <Form
                className="w-75"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail validationCustomEmail"
                >
                  <Form.Label className="text-white" id="email">
                    Email address
                  </Form.Label>
                  <Form.Control
                    hasValidation
                    required
                    type="email"
                    placeholder="Enter email"
                    aria-describedby="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword validationCustomPassword"
                >
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button className="mt-4 btnAccess" type="submit">
                  Acceso
                </Button>
              </Form>
            </Col>
          </Col>

          <Col className="flagsHouse mx-4"
          >
            <figure>
              <img src="/src/images/gryffindor2.png" alt="" />
            </figure>
            <figure>
              <img src="/src/images/ravenclaw2.png" alt="" />
            </figure>
            <figure>
              <img src="/src/images/slytherin2.png" alt="" />
            </figure>
            <figure>
              <img src="/src/images/hogwarts2.png" alt="" />
            </figure>
          </Col>
        </Card>
      </Container>
    </div>
  );
}

export default Index;