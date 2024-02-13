
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormHome from '../../components/form/FormHome'
import '../home/home.css'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router';
import TableHome from '../../components/tableHome/TableHome'
import Header from '../../components/header/Header'


function Home() {
  const navigate = useNavigate();

  return (
    <div className="contentView2">
      <Header />
      <Container className="col-xl-9 col-lg-10 col-sm-11 col-11">
        <Row>
          <Col md={12}>
            <FormHome />
          </Col>
        </Row>
        <TableHome showDeleteButton={true} />
        <button
          className="my-5 mx-auto btnAccesslottery"
          onClick={() => navigate("/lottery")}
        >
          Accede al Sorteo !!
        </button>
      </Container>
      <Footer />
    </div>
  );
}
export default Home