import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import Underline from '../../components/Underline';
import Video from '../../components/Video';
import Image from 'next/image';

export default function VideoRestetica() {
  return (
    <Section className="!px-0">
      <Container className="!py-0">
        <div className="flex flex-col relative pb-8 sm:pb-0 md:min-h-screen lg:px-16">
          <div className="h-full w-full absolute top-0 left-0">
            <Image
              src={'/images/custom/cosmetology.jpg'}
              alt="Hero 2"
              fill
              className="object-cover object-center md:hidden"
            />
            <Image
              src={'/images/custom/desktop-clinik.jpg'}
              alt="Hero 2"
              fill
              className="object-cover object-[70%_50%] md:object-[70%_50%] hidden md:block"
            />
          </div>
          <div className="flex flex-col gap-8 ml-auto w-[50%] mb-[120px] z-10 pt-8 sm:w-[55%]  md:w-[60%] md:mr-auto md:ml-4 md:mb-28">
            <Typography
              className="md:text-3xl"
              variant="h3"
              color="text-black"
              fontFamily="ArialBlack"
            >
              СМОТРИТЕ{' '}
              <Underline gradient="to-[#eb2f5b]">ВИДЕО ОБЗОР РЕМОНТА</Underline>
            </Typography>
            <Typography
              className="md:text-3xl"
              variant="h2"
              color="text-black"
              fontFamily="ArialBlack"
            >
              КЛИНИКИ КОСМЕТОЛОГИИ RESTETICA, СДЕЛАННЫЙ ПО НАШЕМУ{' '}
              <Underline gradient="to-[#eb2f5b]">
                ДИЗАЙН ПРОЕКТУ ИНТЕРЬЕРА
              </Underline>
            </Typography>
          </div>
          <Video
            className="z-10 px-4 sm:-mx-4 sm:!aspect-[1.5/1] md:w-4/6 lg:!aspect-[2/1] md:ml-4 md:px-0 lg:w-[70%] lg:mr-auto lg:ml-0 lg:px-0 xl:w-[50%]"
            src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/"
          />
        </div>
      </Container>
    </Section>
  );
}
