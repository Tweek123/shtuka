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
      <Container className="relative !max-w-[100%] overflow-hidden !py-0">
        <div className="relative flex w-full flex-col">
          <div className="relative flex w-full flex-col">
            <Slider className="absolute z-10 h-full w-full">
              <div className="relative aspect-[1600/640] w-full">
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
              <div className="relative aspect-[1600/640] w-full">
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
              <div className="relative aspect-[1600/640] w-full">
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
          <div className="absolute left-[16%] top-[calc(13%)] z-20 mx-auto flex w-fit flex-col">
            <div className="relative mb-2 flex flex-row gap-2 lg:justify-normal">
              <Divider
                className="absolute"
                orientation="vertical"
                thickness="7px"
                color="bg-black"
              />
              <Typography
                className="px-2 py-1 text-lg md:text-2xl lg:ml-4 lg:text-sm"
                variant="h1"
                color="text-white"
                background="bg-black"
              >
                SHTUKA
              </Typography>
              <Typography
                className="md:text-x px-2 py-1 text-lg font-light lg:text-sm"
                variant="h1"
                color="text-[#CBCAC6]"
                background="bg-black"
              >
                СТУДИЯ ЖИГУЛЕВА И ЯКОВЛЕВОЙ
              </Typography>
            </div>
            <div className="relative flex flex-row justify-between bg-gray-200 bg-opacity-40 lg:mt-0">
              <Divider
                className="absolute"
                orientation="vertical"
                thickness="7px"
                color="bg-black"
              />
              <Typography
                className="px-1 py-1 text-[28px] text-black md:py-2 md:text-5xl lg:px-4 lg:py-1 lg:text-6xl lg:font-normal"
                variant="h1"
              >
                ДИЗАЙН ИНТЕРЬЕРА
              </Typography>
              <Divider
                className="absolute right-0"
                orientation="vertical"
                thickness="7px"
              />
            </div>
          </div>
          <div className="absolute z-50 mt-auto lg:right-[12%] lg:top-[40%] lg:ml-28 lg:mt-8 lg:w-fit">
            <Typography
              className="text-md lg:ml-22 mt-auto px-8 py-4 text-center md:text-5xl lg:mr-24 lg:py-1 lg:text-left lg:text-2xl lg:font-light"
              variant="h1"
              color="text-white"
              background="bg-black"
            >
              НОВЫЙ УРОВЕНЬ
              <br className="lg:hidden" /> КОМФОРТА,
              <Divider
                className="mt-2 lg:hidden"
                color="bg-white"
                thickness="7px"
              />
              <br className="hidden lg:block" />
              <span className="text-xl font-light text-white md:text-2xl lg:text-2xl lg:uppercase">
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
