import { Container, Row, Col, Badge, Button, Image } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <header id="about" className="hero-section text-white d-flex align-items-center py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <div className="avatar-wrapper mx-auto">
              <Image 
                src="https://github.com/juanjosesotoflorez-spec.png" 
                alt="Juan José Soto Flórez" 
                fluid 
                roundedCircle 
                className="avatar-img"
              />
            </div>
          </Col>
          <Col lg={8} className="text-center text-lg-start">
            <Badge className="badge-rgb mb-2 px-3 py-2">
              <i className="bi bi-geo-alt-fill me-1"></i>Medellín, Colombia
            </Badge>
            <h1 className="display-4 fw-bold">¡Hola! Soy <span className="rgb-text">Juan José Soto Flórez</span></h1>
            <p className="lead mt-3 text-light-50">
              Tecnólogo en <strong>Análisis y Desarrollo de Software (ADSO)</strong> y <strong>Técnico en Sistemas</strong>. Apasionado por la creación de aplicaciones web, herramientas digitales, frontend interactivo, desarrollo backend y gestión de bases de datos.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4 flex-wrap">
              <Button href="#projects" className="btn-rgb px-4 py-2">
                <i className="bi bi-rocket-takeoff me-2"></i>Ver Proyectos
              </Button>
              <Button href="https://github.com/juanjosesotoflorez-spec" target="_blank" className="btn-outline-rgb px-4 py-2">
                <i className="bi bi-github me-2"></i>GitHub Profile
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default AboutMe;