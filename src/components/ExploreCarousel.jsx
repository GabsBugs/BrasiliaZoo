import Slider from "react-slick";
import styled from "styled-components";
import { Button } from "@/pages/HomeScreen.styles"; // Usa o mesmo botão

const CarouselContainer = styled.div`
  margin-top: 2rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ExploreCarousel = () => {
  const slides = [
    {
      title: "Habitats",
      text: "Explore habitats de várias partes do mundo em um só dia.",
      img: "/images/bicho-preguica.jpg",
      btn: "CONHEÇA OS HABITATS",
    },
    {
      title: "Nossos Animais",
      text: "Saiba mais sobre os animais do nosso zoológico.",
      img: "/images/gorila2.jpg",
      btn: "VER ANIMAIS",
    },
    {
      title: "Palestras Diárias",
      text: "Participe das conversas educativas com os cuidadores.",
      img: "/images/pinguins.jpg",
      btn: "VER AGENDA",
    },
    {
      title: "Atividades Interativas",
      text: "Experiências práticas para crianças e famílias.",
      img: "/images/interacao.jpg",
      btn: "SAIBA MAIS",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Card key={index}>
            <Image src={slide.img} alt={slide.title} />
            <Content>
              <Title>{slide.title}</Title>
              <Text>{slide.text}</Text>
              <Button $variant="outline">{slide.btn}</Button>
            </Content>
          </Card>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default ExploreCarousel;
