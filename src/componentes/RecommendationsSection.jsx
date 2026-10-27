import { Container, Row, Col, Card } from 'react-bootstrap';

const RecommendationsSection = ({ recommendations }) => {
  return (
    <section id="recommendations" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-2">Recomendaciones & <span className="rgb-text">Testimonios</span></h2>
        <p className="text-center text-muted mb-5">Comentarios y opiniones sobre mi trabajo</p>

        <Row className="g-4">
          {recommendations.map((item, index) => (
            <Col key={index} md={4}>
              <Card className="testimonial-card p-4 h-100 border-0">
                <Card.Body className="d-flex flex-column justify-content-between p-0">
                  <Card.Text className="fst-italic text-light">"{item.text}"</Card.Text>
                  <div className="mt-3 text-end">
                    <span className="fw-bold d-block rgb-text">— {item.author}</span>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecommendationsSection;