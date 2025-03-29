import Button from '../../components/Button';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import Underline from '../../components/Underline';

export default function Consultation() {
  return (
    <Section background="bg-[#EFEFEF]">
      <Container className="max-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] lg:gap-12">
          <div className="flex flex-col">
            <Typography
              className="mb-8 font-light md:mb-8 md:text-2xl"
              variant="p"
              color="text-[#eb2f5b]"
              fontFamily="VarelaRound"
            >
              ЕСТЬ СОМНЕНИЯ?
            </Typography>
            <Typography
              className="mb-8 md:text-3xl"
              variant="h1"
              color="text-black"
              fontFamily="womby"
            >
              ХОТИТЕ ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ДИЗАЙНЕРА{' '}
              <Underline className="leading-[1.18]" gradient="to-[#eb2f5b]">
                БЕСПЛАТНО?
              </Underline>
            </Typography>
            <Typography
              className="mb-8 font-light md:text-xl md:mb-12"
              variant="h3"
              fontFamily="Metal"
              color="text-black"
            >
              Записывайтесь на консультацию с дизайнером интерьера! Мы обсудим
              вашу планировку и вы точно поймете, нужен ли вам дизайн проект
              интерьера.
            </Typography>
          </div>
          <div className="flex flex-col px-4 py-12 bg-white rounded-bubble w-full max-w-[480px] mx-auto lg:my-auto">
            <Typography
              className="mb-8 text-center font-light md:text-3xl"
              variant="h3"
              fontFamily="ArialBlack"
              color="text-black"
            >
              Записаться к дизайнеру:
            </Typography>
            <Button size="lg">ОСТАВИТЬ ЗАЯВКУ</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
