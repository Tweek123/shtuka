import Container from '../../components/Container';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import Underline from '../../components/Underline';

export default function GalleryPortfolio() {
  return (
    <Section background="bg-black">
      <Container>
        <div className="flex flex-col">
          <Typography
            className="mb-8 md:text-3xl"
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
