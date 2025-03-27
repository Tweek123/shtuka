import Button from './Button';
import Container from './Container';
import Section from './Section';
import Typography from './Typography';
import Underline from './Underline';

export default function Consultation() {
  return (
    <Section background="bg-[#EFEFEF]">
      <Container>
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
            className="mb-8 md:text-5xl"
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
            className="mb-8 font-light md:text-3xl md:mb-20"
            variant="h3"
            fontFamily="Metal"
            color="text-black"
          >
            Записывайтесь на консультацию с дизайнером интерьера! Мы обсудим
            вашу планировку и вы точно поймете, нужен ли вам дизайн проект
            интерьера.
          </Typography>
          <div className="flex flex-col px-4 py-12 bg-white rounded-bubble w-full max-w-[480px] mx-auto">
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
