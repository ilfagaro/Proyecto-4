import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';


function Index() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <Container className='d-flex justify-content-center '>

          <Card className='cardCustom '>
              <img className='mt-5 mb-5 w-25' src="/src/images/hogwarts2.png" alt=""/>
              <Col md={10} xs={11} lg={11}>
              <p className='text-white '>¡Bienvenido al seleccionador de casas de Howards! Aquí podrás podrás gestionar a cada alumno, los grupos y actividades de una forma rápida ágil y mágica.</p>
              </Col>
              <Col md={10} xs={11} lg={11} >
              <button className='mt-2 btnAccess' onClick={() => navigate('/home')}>Acceso</button>
              </Col>
              <Col md={4} xs={4} lg={4} >
                <section className='flagsHouse'>
                <figure>
                  <img src="/src/images/gryffindor2.png" alt=""/>
                </figure>
                <figure>
                  <img src="/src/images/ravenclaw2.png" alt=""/>
                </figure>
                <figure>
                  <img src="/src/images/slytherin2.png" alt=""/>
                </figure>
                <figure>
                  <img src="/src/images/hogwarts2.png" alt=""/>
                </figure>
                </section>

              </Col>
              </Card>
              
      </Container>
     
    </div>
  )
}

export default Index;