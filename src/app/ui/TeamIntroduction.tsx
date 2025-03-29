import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import Button from '@/components/Button';
import Owner from '@/components/Owner';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../components/Avatar';
import Info from '../../components/Info';
import Quote from '../../components/Quote';

export default function TeamIntroduction() {
  return (
    <Section className="">
      <Container className="">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr,2fr,2fr]">
            <div className="flex flex-col">
              <div className="flex flex-col mb-12 md:py-12 lg:py-0 lg:mb-0">
                <Typography
                  className="text-sm mx-auto mb-6 md:mb-8 md:text-2xl lg:text-base xl:mb-4"
                  color="text-[#eb2f5b]"
                  variant="p"
                  fontFamily="VarelaRound"
                >
                  С ВАМИ БУДУТ РАБОТАТЬ
                </Typography>
                <Typography
                  className="mx-auto text-center mb-12 text-black md:text-3xl xl:mb-8"
                  color="text-[#eb2f5b]"
                  variant="h1"
                  fontFamily="womby"
                >
                  СТУДИЯ ШТУКА.
                  <br />
                  <Underline className="leading-[1.18]">
                    ДИЗАЙН ИНТЕРЬЕРА В УФЕ
                  </Underline>
                  <br />
                  <Underline className="leading-[1.18]">
                    ОТ АРХИТЕКТОРА И ДИЗАЙНЕРА
                  </Underline>
                </Typography>
                <Button className="md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
                <Button
                  size="lg"
                  className="hidden md:block text-nowrap lg:mb-8 xl:mb-4"
                >
                  РАССЧИТАТЬ ПРОЕКТ
                </Button>
              </div>
              <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12">
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
            <div className="flex flex-col w-full aspect-[4/5] relative sm:aspect-[2/1] md:aspect-auto">
              <Image
                src={'/images/custom/clinik.jpg'}
                alt="Avatar"
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-col gap-8 xl:gap-0">
              <Info
                className="xl:py-4"
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
