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
      <Container className="relative overflow-hidden !py-0 !max-w-[100%]">
        <div className="flex flex-col min-h-screen w-full relative xl:min-h-[80vh]">
          <div className="flex flex-col w-full relative">
            <Slider className="z-10 min-h-screen w-full absolute xl:min-h-[80vh]">
              <div className="min-h-screen w-full relative xl:min-h-[80vh]">
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
                  className="object-cover object-center hidden md:block md:object-[90%_80%]"
                />
              </div>
              <div className="min-h-screen w-full relative xl:min-h-[80vh]">
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
                  className="object-cover object-center hidden md:block md:object-[50%_20%]"
                />
              </div>
              <div className="min-h-screen w-full relative xl:min-h-[80vh]">
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
                  className="object-cover object-center hidden md:block md:object-[50%_20%]"
                />
              </div>
            </Slider>
          </div>
          <div className="flex flex-col z-10 absolute left-0 right-0 m-auto h-full px-4 pt-24 pb-8 md:py-8 md:pt-12 text-nowrap w-fit lg:pt-20">
            <div className="flex flex-col lg:-ml-40 lg:mr-40">
              <div className="flex flex-row justify-between gap-2 mb-2 lg:justify-normal">
                <Divider orientation="vertical" />
                <Typography
                  className="px-2 py-1 text-lg md:text-2xl"
                  variant="h1"
                  color="text-white"
                  background="bg-dark-custom"
                >
                  SHTUKA
                </Typography>
                <Typography
                  className="px-2 py-1 text-lg font-light md:text-xl"
                  variant="h1"
                  color="text-[#CBCAC6]"
                  background="bg-dark-custom"
                >
                  СТУДИЯ ЖИГУЛЕВА И ЯКОВЛЕВОЙ
                </Typography>
              </div>
              <div className="flex flex-row justify-between bg-gray-200 bg-opacity-40">
                <Divider orientation="vertical" />
                <Typography
                  className="px-1 py-1 text-[28px] text-black md:text-5xl md:py-2 lg:text-6xl lg:font-normal"
                  variant="h1"
                >
                  ДИЗАЙН ИНТЕРЬЕРА
                </Typography>
                <Divider orientation="vertical" />
              </div>
            </div>
            <div className="mt-auto lg:mt-20 xl:mt-8 xl:ml-28">
              <Typography
                className="px-8 py-4 text-md mt-auto text-center md:text-5xl lg:text-2xl lg:text-left lg:font-light lg:ml-22 lg:mr-24"
                variant="h1"
                color="text-white"
                background="bg-black"
              >
                НОВЫЙ УРОВЕНЬ
                <br className="lg:hidden" /> КОМФОРТА
                <Divider className="mt-2 lg:hidden" color="bg-white" />
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
