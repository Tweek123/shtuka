import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import Info from '@/components/Info';
import Slider from '@/components/Slider';
import Image from 'next/image';
import Typography from '@/components/Typography';
import Divider from '@/components/Divider';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Home } from 'react-feather';
import { House } from '@/components/Icons';

const desktopSlides = [
  '/shtuka/images/examples/desktop/slider/1.jpg',
  '/shtuka/images/examples/desktop/slider/2.jpg',
  '/shtuka/images/examples/desktop/slider/3.jpg',
  '/shtuka/images/examples/desktop/slider/4.jpg',
  '/shtuka/images/examples/desktop/slider/5.jpg',
];

export default function Testimonials() {
  return (
    <Section className="!px-0">
      <Container className="!py-0 md:-mt-16">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-[71.4%,28.6%] md:gap-0">
          <Info
            className="pb-0 md:order-2 md:!py-0 md:text-center"
            Icon={House}
            text={'ВЫЯВИМ НУЖНЫЙ ВАМ СТИЛЬ ИНТЕРЬЕРА И РЕАЛИЗУЕМ ЕГО'}
            subtext={
              'ИНДИВИДУАЛЬНЫЙ ПОДБОР ИНТЕРЬЕРА, В ЗАВИСИМОСТИ ОТ ОСОБЕННОСТЕЙ ПОМЕЩЕНИЯ, ЗАДАЧ И ВАШИХ ПРЕДПОЧТЕНИЙ'
            }
          />

          <div className="z-40 flex flex-col shadow-[0_0_0.4rem_0_rgba(0,0,0,0.3)]">
            <Slider className="min-h-screen w-full md:hidden">
              <div className="relative aspect-[800/1100] w-full">
                <Image
                  src={'/shtuka/images/examples/16.jpg'}
                  alt="Example 1"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 m-auto flex h-fit w-full max-w-[80%] flex-col bg-white p-4 text-center opacity-80">
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ДОМА
                  </Typography>
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ЭКЛЕКТИЧНЫЙ ЛЮКС
                  </Typography>
                  <Divider
                    className="my-2"
                    orientation="horizontal"
                    thickness="1px"
                  />
                  <Typography
                    className="text-xs"
                    color="text-black"
                    variant="h3"
                  >
                    ПРЕМИАЛЬНЫЙ ЭЛЕКТИЧНЫЙ ИНТЕРЬЕР С ЭЛЕМЕНТАМИ КЛАССИЧЕСКОЙ
                    ОТДЕЛКИ
                  </Typography>
                </div>
              </div>
              <div className="relative aspect-[800/1100] w-full">
                <Image
                  src={'/shtuka/images/examples/17.jpg'}
                  alt="Example 2"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 m-auto flex h-fit w-full max-w-[80%] flex-col bg-white p-4 text-center opacity-80">
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ВЫСТАВКИ
                  </Typography>
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    СУМАСШЕДШИЕ СНОВЕДЕНИЯ
                  </Typography>
                  <Divider
                    className="my-2"
                    orientation="horizontal"
                    thickness="1px"
                  />
                  <Typography
                    className="text-xs"
                    color="text-black"
                    variant="h3"
                  >
                    ФОТОЗОНЫ, ПОЗИТИВНЫЕ ЦВЕТА, ПЛАВНЫЕ ФОРМЫ, ДЕМОНСТРАЦИЯ
                    ТКАНЕЙ И МЕБЕЛИ
                  </Typography>
                </div>
              </div>
              <div className="relative aspect-[800/1100] w-full">
                <Image
                  src={'/shtuka/images/examples/19.jpg'}
                  alt="Example 3"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 m-auto flex h-fit w-full max-w-[80%] flex-col bg-white p-4 text-center opacity-80">
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ИНТЕРЬЕРА
                  </Typography>
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    СОВРЕМЕННЫЙ И ТЕМНЫЙ
                  </Typography>
                  <Divider
                    className="my-2"
                    orientation="horizontal"
                    thickness="1px"
                  />
                  <Typography
                    className="text-xs"
                    color="text-black"
                    variant="h3"
                  >
                    ЧЕТКАЯ ГЕОМЕТРИЯ, ТЕМНЫЙ ФОН, ПРИРОДНЫЕ МАТЕРИАЛЫ И ЯРКИЕ
                    АКЦЕНТЫ
                  </Typography>
                </div>
              </div>
              <div className="relative aspect-[800/1100] w-full">
                <Image
                  src={'/shtuka/images/examples/18.jpg'}
                  alt="Example 4"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 m-auto flex h-fit w-full max-w-[80%] flex-col bg-white p-4 text-center opacity-80">
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ИНТЕРЬЕРА
                  </Typography>
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ТРАДИЦИОННАЯ КЛАССИКА
                  </Typography>
                  <Divider
                    className="my-2"
                    orientation="horizontal"
                    thickness="1px"
                  />
                  <Typography
                    className="text-xs"
                    color="text-black"
                    variant="h3"
                  >
                    ВИНТАЖНЫЕ ЭЛЕМЕНТЫ, СВЕТЛЫЙ ФОН, ТРАДИЦИОННЫЙ СТИЛЬ
                    ЗАГОРОДНОГО ДОМА
                  </Typography>
                </div>
              </div>
              <div className="relative aspect-[800/1100] w-full">
                <Image
                  src={'/shtuka/images/examples/20.jpg'}
                  alt="Example 5"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 m-auto flex h-fit w-full max-w-[80%] flex-col bg-white p-4 text-center opacity-80">
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ КВАРТИРЫ
                  </Typography>
                  <Typography
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    СОВРЕМЕННЫЙ ЭКО
                  </Typography>
                  <Divider
                    className="my-2"
                    orientation="horizontal"
                    thickness="1px"
                  />
                  <Typography
                    className="text-xs"
                    color="text-black/80"
                    variant="h3"
                  >
                    ОБИЛИЕ СВЕТЛОГО ШПОНА ДЕРЕВА, СВЕТЛЫЕ ТОНА ДЕРЕВА И ОТДЕЛКИ
                  </Typography>
                </div>
              </div>
            </Slider>

            <Slider className="hidden aspect-video w-full md:order-1 md:block md:aspect-auto">
              {desktopSlides.map((src) => (
                <div className="relative aspect-[1800/600] w-full">
                  <div className="flex h-full flex-row gap-8">
                    <div className="relative w-full">
                      <Image
                        src={src}
                        alt="Example 1"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </Section>
  );
}
