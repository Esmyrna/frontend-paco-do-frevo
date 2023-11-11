import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CarouselProps {
  images: string[];
}

const Container = styled.div`
  display: flex;
  overflow: hidden;
  border: 6px solid #E20821;
`;

const Slide = styled.img`
  flex: 0 0 auto;
  width: 100%;
  transition: transform 0.5s ease;
`;

const CarouselImage: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 2000); // Troca a cada 3 segundos (3000ms)

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <Container>
      {images.map((image, index) => (
        <Slide
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        />
      ))}
    </Container>
  );
};

export default CarouselImage;
