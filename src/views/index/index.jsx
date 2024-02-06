import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Index() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <Container className='d-flex justify-content-center '>

        <Card className='cardCustom '>
          <img className='mt-5 mb-5 w-25' src="/src/images/hogwarts2.png" alt="" />
          
          <Col md={10} xs={11} lg={11} >
            <Col className='d-flex justify-content-center'>
              <Form className='w-75'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='text-white' >Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='text-white'>Password</Form.Label>
                  <Form.Control className='mb-5' type="password" placeholder="Password" />
                </Form.Group>

                <button className='mt-2 btnAccess' onClick={() => navigate('/home')}>Acceso</button>

              </Form>
            </Col>

          </Col>

          <Col md={4} xs={4} lg={4} >
            <section className='flagsHouse'>
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
            </section>

          </Col>
        </Card>

      </Container>

    </div>
  )
}

export default Index;