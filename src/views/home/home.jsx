
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormHome from '../../components/form/FormHome'
import '../home/home.css'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router';
import TableHome from '../../components/table/TableHome'
import Header from '../../components/header/Header'


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={12}>
            <FormHome />
          </Col>
        </Row>
        <TableHome showDeleteButton={true} />
        <button 
            className='mt-2 mx-auto btnAccess' 
            onClick={() => navigate('/lottery')}>
              Accede al Sorteo !!
        </button>
      </Container>
      <Footer />
    </div>

  );
}
export default Home