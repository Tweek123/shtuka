import Container from './Container';
import Gallery from './Gallery';
import Section from './Section';
import Typography from './Typography';
import Underline from './Underline';

export default function GalleryPortfolio() {
  return (
    <Section background="bg-black">
      <Container>
        <div className="flex flex-col">
          <Typography
            className="mb-8 md:text-5xl md:mb-16"
            variant="h1"
            color="text-white"
            fontFamily="ArialBlack"
          >
            ПРОЕКТЫ ДИЗАЙНА ИНТЕРЬЕРА{' '}
            <Underline className="leading-[1.18]" gradient="to-[#eb2f5b]">
              КВАРТИР, ДОМОВ И КОММЕРЧЕСКИХ ОБЪЕКТОВ
            </Underline>
          </Typography>
          <Gallery />
        </div>
      </Container>
    </Section>
  );
}
