import { Container, Row, Col, Card } from 'react-bootstrap';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML5', desc: 'Estructura Web', icon: 'bi-filetype-html' },
    { name: 'CSS3', desc: 'Estilos & Layouts', icon: 'bi-filetype-css' },
    { name: 'JavaScript', desc: 'Lógica & Dinamismo', icon: 'bi-filetype-js' },
    { name: 'Bootstrap', desc: 'Diseño Responsivo', icon: 'bi-bootstrap' },
    { name: 'PHP', desc: 'Backend Web', icon: 'bi-filetype-php' },
    { name: 'MySQL', desc: 'Bases de Datos', icon: 'bi-database' },
    { name: 'Git & GitHub', desc: 'Control de Versiones', icon: 'bi-git' }
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-2">Habilidades <span className="rgb-text">Técnicas</span></h2>
        <p className="text-center text-muted mb-5">Tecnologías y herramientas que utilizo para desarrollar mis proyectos</p>
        
        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2}>
              <Card className="skill-card text-center p-3 h-100 border-0">
                <Card.Body className="p-0">
                  <i className={`bi ${skill.icon} fs-1 rgb-icon`}></i>
                  <Card.Title className="mt-2 fs-6 fw-bold">{skill.name}</Card.Title>
                  <Card.Text className="text-muted small">{skill.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;