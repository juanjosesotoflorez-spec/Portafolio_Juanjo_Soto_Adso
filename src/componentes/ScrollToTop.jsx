import { Button } from 'react-bootstrap';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button 
      onClick={scrollToTop} 
      className="scroll-top-btn" 
      aria-label="Volver arriba"
    >
      <i className="bi bi-arrow-up"></i>
    </Button>
  );
};

export default ScrollToTop;