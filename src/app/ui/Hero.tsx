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
        <div className="relative flex min-h-screen w-full flex-col xl:min-h-[80vh]">
          <div className="relative flex w-full flex-col">
            <Slider className="absolute z-10 min-h-screen w-full xl:min-h-[80vh]">
              <div className="relative min-h-screen w-full xl:min-h-[80vh]">
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
                  className="hidden object-cover object-center md:block md:object-[90%_80%]"
                />
              </div>
              <div className="relative min-h-screen w-full xl:min-h-[80vh]">
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
                  className="hidden object-cover object-center md:block md:object-[100%_30px]"
                />
              </div>
              <div className="relative min-h-screen w-full xl:min-h-[80vh]">
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
                  className="hidden object-cover object-center md:block md:object-[50%_20%]"
                />
              </div>
            </Slider>
          </div>
          <div className="absolute left-0 right-0 z-10 m-auto flex h-full w-fit flex-col text-nowrap px-4 pb-8 pt-24 md:py-8 md:pt-12 lg:pt-20">
            <div className="flex flex-col lg:-ml-40 lg:mr-40">
              <div className="mb-2 flex flex-row justify-between gap-2 lg:justify-normal">
                <Divider orientation="vertical" thickness="7px" />
                <Typography
                  className="px-2 py-1 text-lg md:text-2xl"
                  variant="h1"
                  color="text-white"
                  background="bg-black"
                >
                  SHTUKA
                </Typography>
                <Typography
                  className="px-2 py-1 text-lg font-light md:text-xl"
                  variant="h1"
                  color="text-[#CBCAC6]"
                  background="bg-black"
                >
                  СТУДИЯ ЖИГУЛЕВА И ЯКОВЛЕВОЙ
                </Typography>
              </div>
              <div className="flex flex-row justify-between bg-gray-200 bg-opacity-40">
                <Divider orientation="vertical" thickness="7px" />
                <Typography
                  className="px-1 py-1 text-[28px] text-black md:py-2 md:text-5xl lg:-ml-28 lg:text-6xl lg:font-normal"
                  variant="h1"
                >
                  ДИЗАЙН ИНТЕРЬЕРА
                </Typography>
                <Divider orientation="vertical" thickness="7px" />
              </div>
            </div>
            <div className="mt-auto lg:mt-20 xl:ml-28 xl:mt-8">
              <Typography
                className="text-md lg:ml-22 mt-auto px-8 py-4 text-center md:text-5xl lg:mr-24 lg:text-left lg:text-2xl lg:font-light"
                variant="h1"
                color="text-white"
                background="bg-black"
              >
                НОВЫЙ УРОВЕНЬ
                <br className="lg:hidden" /> КОМФОРТА
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
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
