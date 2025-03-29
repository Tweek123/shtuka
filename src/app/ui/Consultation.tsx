import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import Underline from '../../components/Underline';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Divider from '@/components/Divider';
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
              className="mb-8 font-light md:mb-12 md:text-xl"
              variant="h3"
              fontFamily="Metal"
              color="text-black"
            >
              Записывайтесь на консультацию с дизайнером интерьера! Мы обсудим
              вашу планировку и вы точно поймете, нужен ли вам дизайн проект
              интерьера.
            </Typography>
          </div>
          <div className="relative mx-auto flex w-full max-w-[480px] flex-col overflow-hidden rounded-[4rem] bg-white px-4 py-12 lg:my-auto">
            <FontAwesomeIcon
              height={64}
              width={64}
              className="absolute left-0 right-0 top-1 mx-auto mb-8 size-16 text-green-600 md:mb-8 md:size-12 lg:mb-16 lg:size-10"
              icon={faWhatsapp}
            />
            <Divider
              className="absolute left-0 top-12 w-full bg-gray-500"
              thickness="1px"
            />
            <Typography
              className="mb-8 text-center font-light md:text-3xl lg:mt-8 lg:text-2xl"
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
