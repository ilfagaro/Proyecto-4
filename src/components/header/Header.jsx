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
      </div>