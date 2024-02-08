import './header.css';
import React from 'react';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdLogout } from "react-icons/md";

function Header() {

  const handleGoIndex = () => {
    navigate("/");
  }

  return(
    <>
      <Container>
        <Container className='d-flex flex-column align-items-end'>
          <Col>
            <Button
              variant="text"
              endIcon={<MdLogout size={35} />}
              style={{ textTransform: 'none', marginRight: 'auto', color: 'black' }}
              onClick={handleGoIndex}>
              Logout

            </Button>
          </Col>
        </Container>
        <Row >
          <Col className='d-flex justify-content-center '>
            <img className="logoPrincipal"
              src="/src/images/logo.png" />
          </Col>
        </Row>
      </Container>
      </>
   );
}

export default Header;