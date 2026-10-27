import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'TaskFlow',
      tech: 'HTML / CSS / JS',
      desc: 'Aplicación web interactiva para la gestión inteligente de tareas con almacenamiento en LocalStorage.',
      icon: 'bi-check2-square',
      link: 'https://github.com/juanjosesotoflorez-spec/TaskFlow-Gestor-Inteligente-de-Tareas'
    },
    {
      title: 'JE&J Streetwear',
      tech: 'PHP / MySQL / XAMPP',
      desc: 'Tienda virtual e-commerce de ropa urbana con catálogo, carrito de compras y reportes en FPDF.',
      icon: 'bi-bag-check',
      link: 'https://github.com/juanjosesotoflorez-spec/JEJ-Streetwear'
    },
    {
      title: 'Juego Interactivo IT',
      tech: 'HTML5 / JavaScript',
      desc: 'Plataforma dinámica interactiva para la evaluación sobre normativas COBIT, IEEE e ISO 37000.',
      icon: 'bi-controller',
      link: 'https://github.com/juanjosesotoflorez-spec/Juego_interactivo'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-darker">
      <Container>
        <h2 className="text-center fw-bold mb-2">Mis <span className="rgb-text">Proyectos</span></h2>
        <p className="text-center text-muted mb-5">Proyectos destacados desarrollados en mi formación</p>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="project-card h-100 p-4 border-0">
                <Card.Body className="d-flex flex-column justify-content-between p-0">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <i className={`bi ${project.icon} fs-2 rgb-icon`}></i>
                      <Badge bg="secondary">{project.tech}</Badge>
                    </div>
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted small mt-2">{project.desc}</Card.Text>
                  </div>
                  <Button href={project.link} target="_blank" className="btn-outline-rgb btn-sm mt-3 w-100">
                    <i className="bi bi-github me-1"></i> Ver Repositorio
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;