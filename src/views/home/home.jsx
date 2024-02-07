
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormHome from '../../components/form/FormHome'
import '../home/home.css'
import Footer from '../../components/footer/Footer'
import { MdLogout } from "react-icons/md";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import TableHome from '../../components/table/TableHome'



function Home() {
  const navigate = useNavigate();

  const handleGoIndex = () => {
    navigate("/");
  }
  return (
    <div className='contentHome'>
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

      <Container>
        <Row>
          <Col md={12}>
            <FormHome />
          </Col>
        </Row>
        <TableHome />
        <button className='mt-2 mx-auto btnAccess' onClick={() => navigate('/lottery')}>
  Accede al Sorteo !!
</button>

        <Footer />
      </Container>
    </div>

  );
}
export default Home