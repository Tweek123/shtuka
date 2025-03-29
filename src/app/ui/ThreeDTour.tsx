import Typography from '@/components/Typography';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ThreeDTour() {
  return (
    <Section className="" background="bg-[#353535]">
      <Container>
        <div className="flex min-h-screen flex-grow flex-col bg-[#353535]">
          <div className="mb-4 flex flex-grow flex-col items-center gap-8 text-center md:mb-12 lg:mb-16">
            <div className="flex flex-col">
              <Typography
                className="font-extrabold md:text-3xl"
                variant="h1"
                fontFamily="ArialBlack"
                color="text-white"
              >
                СДЕЛАЕМ 3D ТУР ВАШЕГО ПРОЕКТА
              </Typography>
              <Typography
                className="text-2.5xl font-ArialBlack font-light leading-tight text-black md:text-3xl lg:text-xl"
                variant="h2"
                fontFamily="ArialBlack"
                color="text-white"
              >
                ПЕРЕДВИГАЙТЕ ИЗОБРАЖЕНИЕ, ЧТОБЫ УВИДЕТЬ ВСЕ ДЕТАЛИ
              </Typography>
            </div>
          </div>
          <div className="flex min-h-screen flex-col">
            <iframe
              className="mb-4 aspect-video max-h-screen flex-grow md:mb-12 lg:mb-16"
              width="100%"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              scrolling="no"
              src="https://kuula.co/share/collection/7bCfS?logo=1&amp;info=1&amp;fs=1&amp;vr=0&amp;sd=1&amp;thumbs=1"
            ></iframe>
          </div>
          <div className="flex flex-grow flex-col items-center gap-8 text-center md:mb-4 lg:mb-0">
            <div className="flex flex-col">
              <Typography
                className="font-extrabold md:text-3xl"
                variant="h1"
                fontFamily="ArialBlack"
                color="text-white"
              >
                ХОТИТЕ ТАК ЖЕ?
              </Typography>
              <Typography
                className="text-2.5xl font-ArialBlack font-light leading-tight text-black md:text-3xl lg:text-xl"
                variant="h2"
                fontFamily="ArialBlack"
                color="text-white"
              >
                ЗАПОЛНИТЕ ФОРМУ, И МЫ ВАМИ СВЯЖЕМСЯ
              </Typography>
            </div>
            <Button className="md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
            <Button className="hidden text-nowrap md:block" size="lg">
              РАССЧИТАТЬ ПРОЕКТ
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
