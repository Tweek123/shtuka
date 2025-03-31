'use client';
import Typography from '../../components/Typography';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Divider from '../../components/Divider';
import Slider from '@/components/Slider';
import Image from 'next/image';

const Hero = () => {
  return (
    <Section padding="px-0">
      <Container className="relative max-h-screen !max-w-[100%] overflow-hidden !py-0 !pt-16 md:!pt-7">
        <div className="relative flex w-full flex-col">
          <div className="relative flex w-full flex-col">
            <Slider className="absolute h-full w-full">
              <div className="relative min-h-screen w-full md:aspect-[1600/640] md:min-h-[inherit]">
                <Image
                  src={'/images/hero/1.jpg'}
                  alt="Hero 1"
                  fill
                  className="object-cover object-center md:hidden"
                />
                <Image
                  src={'/images/hero/desktop-1.jpg'}
                  alt="Hero 1"
                  fill
                  className="hidden object-cover object-center md:block"
                />
              </div>
              <div className="relative min-h-screen w-full md:aspect-[1600/640] md:min-h-[inherit]">
                <Image
                  src={'/images/hero/2.jpg'}
                  alt="Hero 2"
                  fill
                  className="object-cover object-center md:hidden"
                />
                <Image
                  src={'/images/hero/desktop-2.jpg'}
                  alt="Hero 2"
                  fill
                  className="hidden object-cover object-center md:block"
                />
              </div>
              <div className="relative min-h-screen w-full md:aspect-[1600/640] md:min-h-[inherit]">
                <Image
                  src={'/images/hero/3.jpg'}
                  alt="Hero 3"
                  fill
                  className="object-cover object-center md:hidden"
                />
                <Image
                  src={'/images/hero/desktop-3.jpg'}
                  alt="Hero 3"
                  fill
                  className="hidden object-cover object-center md:block"
                />
              </div>
            </Slider>
          </div>
          <div className="absolute left-0 right-0 top-[8%] z-10 mx-auto flex w-fit flex-col md:left-[16%] md:right-auto md:top-[calc(13%)] md:min-h-[inherit]">
            <div className="relative mb-2 flex flex-row gap-2 md:justify-normal">
              <Divider
                className="absolute"
                orientation="vertical"
                thickness="0.3rem"
                color="bg-black"
              />
              <Typography
                className="ml-4 px-2 py-1 text-lg md:ml-4 md:text-sm"
                variant="h1"
                color="text-white"
                background="bg-black"
              >
                SHTUKA
              </Typography>
              <Typography
                className="px-2 py-1 text-lg font-light md:text-sm"
                variant="h1"
                color="text-[#CBCAC6]"
                background="bg-black"
              >
                СТУДИЯ ЖИГУЛЕВА И ЯКОВЛЕВОЙ
              </Typography>
            </div>
            <div className="relative flex flex-row justify-between bg-gray-200 bg-opacity-40 md:mt-0">
              <Divider
                className="absolute"
                orientation="vertical"
                thickness="0.3rem"
                color="bg-black"
              />
              <Typography
                className="px-6 py-1 text-5xl text-black md:py-1 md:text-6xl md:font-normal"
                variant="h1"
              >
                ДИЗАЙН ИНТЕРЬЕРА
              </Typography>
              <Divider
                className="absolute right-0"
                orientation="vertical"
                thickness="0.3rem"
              />
            </div>
          </div>
          <div className="absolute bottom-[3%] left-0 right-0 z-10 mx-auto mt-auto w-fit md:bottom-auto md:left-auto md:right-[12%] md:top-[42%] md:ml-28 md:mt-8 md:w-fit">
            <Typography
              className="text-md md:ml-22 mt-auto px-16 py-4 text-center font-light md:mr-24 md:px-8 md:py-1 md:text-left md:text-2xl"
              variant="h1"
              color="text-white"
              background="bg-black"
            >
              НОВЫЙ УРОВЕНЬ
              <br className="md:hidden" /> КОМФОРТА,
              <Divider
                className="mt-2 md:hidden"
                color="bg-white"
                thickness="0.3rem"
              />
              <br className="hidden md:block" />
              <span className="text-xl font-light uppercase text-white md:text-2xl">
                когда каждый метр работает на вас
              </span>
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
