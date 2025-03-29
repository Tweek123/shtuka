import Typography from '@/components/Typography';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ThreeDTour() {
  return (
    <Section className="sm:py-8" background="bg-[#353535]">
      <Container>
        <div className="flex flex-col flex-grow bg-[#353535] min-h-screen">
          <div className="flex flex-col gap-8 items-center flex-grow mb-4 text-center md:mb-12">
            <div className="flex flex-col">
              <Typography
                className="md:text-3xl"
                variant="h1"
                fontFamily="ArialBlack"
                color="text-white"
              >
                СДЕЛАЕМ 3D ТУР ВАШЕГО ПРОЕКТА
              </Typography>
              <Typography
                className="md:text-3xl"
                variant="h2"
                fontFamily="ArialBlack"
                color="text-white"
              >
                ПЕРЕДВИГАЙТЕ ИЗОБРАЖЕНИЕ, ЧТОБЫ УВИДЕТЬ ВСЕ ДЕТАЛИ
              </Typography>
            </div>
          </div>
          <div className="flex flex-col -mx-4 min-h-screen md:-mx-8">
            <iframe
              className="mb-4 aspect-video flex-grow max-h-screen  md:mb-12"
              width="100%"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              scrolling="no"
              src="https://kuula.co/share/collection/7bCfS?logo=1&amp;info=1&amp;fs=1&amp;vr=0&amp;sd=1&amp;thumbs=1"
            ></iframe>
          </div>
          <div className="flex flex-col gap-8 items-center flex-grow text-center md:mb-4">
            <div className="flex flex-col">
              <Typography
                className="md:text-3xl"
                variant="h1"
                fontFamily="ArialBlack"
                color="text-white"
              >
                ХОТИТЕ ТАК ЖЕ?
              </Typography>
              <Typography
                className="md:text-3xl"
                variant="h2"
                fontFamily="ArialBlack"
                color="text-white"
              >
                ЗАПОЛНИТЕ ФОРМУ, И МЫ ВАМИ СВЯЖЕМСЯ
              </Typography>
            </div>
            <Button className="md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
            <Button className="hidden md:block text-nowrap" size="lg">
              РАССЧИТАТЬ ПРОЕКТ
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
