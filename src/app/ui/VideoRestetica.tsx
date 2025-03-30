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
        <div className="md:min-h-scree relative z-20 flex w-full flex-col pb-8 sm:pb-0 lg:px-16 lg:pb-12">
          <div className="absolute left-0 top-0 z-10 h-full w-full">
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
              className="hidden object-cover object-[70%_50%] md:block md:object-[70%_50%] lg:object-center"
            />
          </div>

          <div className="flex flex-col lg:my-auto lg:-mr-12 lg:ml-12">
            <div className="lg:ma- z-10 mb-[120px] ml-auto flex w-[50%] flex-col gap-8 pt-8 sm:w-[55%] md:mb-8 md:ml-4 md:mr-auto md:w-[60%] lg:mx-0 lg:w-[55%] lg:gap-2 lg:px-0">
              <Typography
                className="font-extrabold md:text-3xl lg:text-3xl"
                variant="h3"
                color="text-black"
                fontFamily="ArialBlack"
              >
                СМОТРИТЕ{' '}
                <Underline gradient="to-[#eb2f5b]">
                  ВИДЕО ОБЗОР РЕМОНТА
                </Underline>
              </Typography>
              <Typography
                className="md:text-3xl lg:text-xl"
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
              className="z-10 px-4 sm:-mx-4 sm:!aspect-[1.5/1] md:ml-4 md:w-4/6 md:px-0 lg:ml-0 lg:mr-auto lg:!aspect-[2/1] lg:w-[55%] lg:px-0"
              src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
