import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactForm = ({ onAddRecommendation }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) return;

    onAddRecommendation({
      text,
      author,
      role: 'Visitante del Portafolio'
    });

    setAuthor('');
    setText('');
    alert('¡Gracias! Tu recomendación ha sido agregada.');
  };

  return (
    <section id="contact" className="py-5 bg-darker">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="form-card p-4 p-md-5 border-0">
              <h3 className="fw-bold text-center mb-3">Deja una <span className="rgb-text">Recomendación</span></h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    className="custom-input"
                    placeholder="Tu nombre completo"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Mensaje o Recomendación</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    className="custom-input"
                    placeholder="Escribe tu recomendación..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="btn-rgb w-100 py-2">
                  <i className="bi bi-send-fill me-2"></i>Enviar Recomendación
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;