import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import Info from '@/components/Info';
import Slider from '@/components/Slider';
import Image from 'next/image';
import Typography from '@/components/Typography';
import Divider from '@/components/Divider';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function Testimonials() {
  return (
    <Section className="!px-0">
      <Container className="!py-0">
        <div className="grid grid-cols-1 gap-8 w-full lg:grid-cols-[70%,30%]  lg:gap-0">
          <Info
            className="lg:py-0 lg:order-2 lg:text-center"
            icon={faPaintRoller}
            text={'ВЫЯВИМ НУЖНЫЙ ВАМ СТИЛЬ ИНТЕРЬЕРА И РЕАЛИЗУЕМ ЕГО'}
            subtext={
              'ИНДИВИДУАЛЬНЫЙ ПОДБОР ИНТЕРЬЕРА, В ЗАВИСИМОСТИ ОТ ОСОБЕННОСТЕЙ ПОМЕЩЕНИЯ, ЗАДАЧ И ВАШИХ ПРЕДПОЧТЕНИЙ'
            }
          />

          <div className="flex flex-col">
            <Slider className="min-h-screen w-full md:hidden">
              <div className="min-h-screen w-full relative">
                <Image
                  src={'/images/examples/16.jpg'}
                  alt="Example 1"
                  fill
                  className="object-cover object-center"
                />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
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
              <div className="min-h-screen w-full relative">
                <Image
                  src={'/images/examples/17.jpg'}
                  alt="Example 2"
                  fill
                  className="object-cover object-center"
                />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
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
              <div className="min-h-screen w-full relative">
                <Image
                  src={'/images/examples/19.jpg'}
                  alt="Example 3"
                  fill
                  className="object-cover object-center"
                />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
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
              <div className="min-h-screen w-full relative">
                <Image
                  src={'/images/examples/18.jpg'}
                  alt="Example 4"
                  fill
                  className="object-cover object-center"
                />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
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
              <div className="min-h-screen w-full relative">
                <Image
                  src={'/images/examples/20.jpg'}
                  alt="Example 5"
                  fill
                  className="object-cover object-center"
                />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
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

            <Slider className="aspect-video w-full hidden md:block lg:order-1 xl:aspect-auto">
              <div className="aspect-[2/1] w-full relative">
                <div className="flex flex-row gap-8 h-full">
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/1.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/2.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography
                    className="text-3xl"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ДОМА
                  </Typography>
                  <Typography
                    className="text-lg"
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
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ПРЕМИАЛЬНЫЙ ЭЛЕКТИЧНЫЙ ИНТЕРЬЕР С ЭЛЕМЕНТАМИ КЛАССИЧЕСКОЙ
                    ОТДЕЛКИ
                  </Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <div className="flex flex-row gap-8 h-full">
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/3.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/4.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography
                    className="text-3xl"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ВЫСТАВКИ
                  </Typography>
                  <Typography
                    className="text-lg"
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
              <div className="aspect-[2/1] w-full relative">
                <div className="flex flex-row gap-8 h-full">
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/7.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/8.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography
                    className="text-3xl"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ИНТЕРЬЕРА
                  </Typography>
                  <Typography
                    className="text-lg"
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
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ЧЕТКАЯ ГЕОМЕТРИЯ, ТЕМНЫЙ ФОН, ПРИРОДНЫЕ МАТЕРИАЛЫ И ЯРКИЕ
                    АКЦЕНТЫ
                  </Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <div className="flex flex-row gap-8 h-full">
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/5.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/6.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography
                    className="text-3xl"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ ИНТЕРЬЕРА
                  </Typography>
                  <Typography
                    className="text-lg"
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
                    className="text-base"
                    color="text-black"
                    variant="h3"
                  >
                    ВИНТАЖНЫЕ ЭЛЕМЕНТЫ, СВЕТЛЫЙ ФОН, ТРАДИЦИОННЫЙ СТИЛЬ
                    ЗАГОРОДНОГО ДОМА
                  </Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <div className="flex flex-row gap-8 h-full">
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/9.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={'/images/examples/desktop/10.jpg'}
                      alt="Example 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography
                    className="text-3xl"
                    color="text-black"
                    variant="h3"
                  >
                    ПРОЕКТ КВАРТИРЫ
                  </Typography>
                  <Typography
                    className="text-lg"
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
                    className="text-base"
                    color="text-black/80"
                    variant="h3"
                  >
                    ОБИЛИЕ СВЕТЛОГО ШПОНА ДЕРЕВА, СВЕТЛЫЕ ТОНА ДЕРЕВА И ОТДЕЛКИ
                  </Typography>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </Section>
  );
}
