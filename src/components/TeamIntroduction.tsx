import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import Button from '@/components/Button';
import Owner from '@/components/Owner';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Avatar from './Avatar';
import Info from './Info';
import Quote from './Quote';

export default function TeamIntroduction() {
  return (
    <Section className="!px-0 lg:!px-16">
      <Container className="!py-0">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[50%_25%_25%] xl:lg:grid-cols-[40%_30%_30%]">
            <div className="flex flex-col">
              <div className="flex flex-col md:py-12 lg:py-0">
                <Typography
                  className="text-sm mx-auto mb-6 md:mb-8 md:text-2xl lg:text-base"
                  color="text-[#eb2f5b]"
                  variant="p"
                  fontFamily="VarelaRound"
                >
                  С ВАМИ БУДУТ РАБОТАТЬ
                </Typography>
                <Typography
                  className="mx-auto text-center mb-6 text-black md:mb-24 md:text-3xl"
                  color="text-[#eb2f5b]"
                  variant="h1"
                  fontFamily="womby"
                >
                  СТУДИЯ ШТУКА.
                  <Underline className="leading-[1.18]">
                    ДИЗАЙН ИНТЕРЬЕРА В УФЕ ОТ АРХИТЕКТОРА И ДИЗАЙНЕРА
                  </Underline>
                </Typography>
                <Button className="md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
                <Button
                  size="lg"
                  className="hidden md:block text-nowrap lg:mb-8"
                >
                  РАССЧИТАТЬ ПРОЕКТ
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <Owner
                  title={`ЮЛИЯ ЯКОВЛЕВА.\nАРХИТЕКТОР`}
                  src={'/images/avatar/yakovleva.jpg'}
                  items={[
                    'Призовое место в конкурсе от 1 ТРЕСТ и ВДНХ на дизайн-проект интерьера квартиры',
                    '15-летний опыт в дизайне интерьеров и высшее архитектурное образование',
                  ]}
                />
                <Owner
                  title={`ИВАН ЖИГУЛЁВ.\nДИЗАЙНЕР`}
                  src={'/images/avatar/zhiguliov.jpg'}
                  items={[
                    'Реализованы интерьеры домов premium класса, площадью более 500 м2.',
                    'Так же интерьеры клиник, детских садов, HoReCa объектов и др.',
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col w-full aspect-[4/5] relative sm:aspect-[2/1] lg:aspect-auto">
              <Image
                src={'/images/custom/clinik.jpg'}
                alt="Avatar"
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-col gap-8">
              <Info
                className="xl:pb-4"
                icon={faHouse}
                text={'ОТЗЫВЫ О НАС:'}
                subtext={'РЕАЛИЗАЦИЯ ИНТЕРЬЕРА КОСМЕТОЛОГИИ'}
              />
              <Quote
                mode="black"
                text="“РЕЗУЛЬТАТ ПРЕВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”"
              />
              <div className="flex flex-row items-center">
                <Avatar
                  className="md:hidden"
                  size="sm"
                  hasBorder={false}
                  src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
                />
                <Avatar
                  className="hidden md:flex"
                  size="md"
                  hasBorder={false}
                  src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
                />
                <div className="flex flex-col">
                  <Typography
                    className="md:text-2xl lg:text-sm"
                    variant="p"
                    color="text-black"
                    fontFamily="womby"
                  >
                    ГУЛЬНАРА А.
                  </Typography>
                  <Typography
                    className="md:text-2xl lg:text-sm"
                    variant="p"
                    color="text-[#0A0A0A]"
                    fontFamily="womby"
                  >
                    ОТЗЫВ НА ДИЗАЙН КЛИНИКИ RESTETICA
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
