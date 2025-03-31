import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import Button from '@/components/Button';
import Owner from '@/components/Owner';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Avatar from '../../components/Avatar';
import Info from '../../components/Info';
import Quote from '../../components/Quote';
import { Home } from 'react-feather';
import { House } from '@/components/Icons';

export default function TeamIntroduction() {
  return (
    <Section className="md:!px-0">
      <Container className="">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-[42.86%,28.57%,28.57%]">
            <div className="flex flex-col">
              <div className="mb-12 flex flex-col md:mb-0 md:py-0">
                <Typography
                  className="mx-auto mb-6 text-sm md:mb-4 md:text-base"
                  color="text-[#eb2f5b]"
                  variant="p"
                  fontFamily="VarelaRound"
                >
                  С ВАМИ БУДУТ РАБОТАТЬ
                </Typography>
                <Typography
                  className="mx-auto mb-12 text-center text-black md:mb-4 md:text-xl"
                  color="text-[#eb2f5b]"
                  variant="h1"
                  fontFamily="ArialBlack"
                >
                  <Underline className="leading-[1.18]">
                    СТУДИЯ ШТУКА. ДИЗАЙН ИНТЕРЬЕРА В УФЕ ОТ АРХИТЕКТОРА И
                    ДИЗАЙНЕРА
                  </Underline>
                </Typography>
                <Button className="md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
                <Button
                  size="md"
                  className="hidden text-nowrap md:mb-4 md:mb-8 md:block"
                >
                  РАССЧИТАТЬ ПРОЕКТ
                </Button>
              </div>
              <div className="mb-12 grid grid-cols-1 gap-4 px-8 md:grid-cols-2 md:gap-12 md:px-0">
                <Owner
                  title={`ЮЛИЯ ЯКОВЛЕВА. АРХИТЕКТОР`}
                  src={'/shtuka/images/avatar/yakovleva.jpg'}
                  items={[
                    'Призовое место в конкурсе от 1 ТРЕСТ и ВДНХ на дизайн-проект квартиры',
                    '15 лет опыта в дизайне интерьеров и высшее архитектурное образование',
                  ]}
                />
                <Owner
                  title={`ИВАН ЖИГУЛЁВ. ДИЗАЙНЕР`}
                  src={'/shtuka/images/avatar/zhiguliov.jpg'}
                  items={[
                    'Реализованы интерьеры домов premium класса, площадью более 500 м2.',
                    'Так же интерьеры клиник, детских садов, HoReCa объектов и др.',
                  ]}
                />
              </div>
            </div>
            <div className="relative flex aspect-[4/5] w-full flex-col md:aspect-auto">
              <Image
                src={'/shtuka/images/custom/clinik.jpg'}
                alt="Avatar"
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="flex flex-col justify-center gap-8 md:gap-0 md:px-8">
              <Info
                className="pb-0 md:py-4"
                Icon={House}
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
                  size="sm"
                  hasBorder={false}
                  src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
                />
                <div className="flex flex-col">
                  <Typography
                    className="md:text-xs"
                    variant="p"
                    color="text-black"
                    fontFamily="helveticaNeue"
                  >
                    ГУЛЬНАРА А.
                  </Typography>
                  <Typography
                    className="md:text-xs"
                    variant="p"
                    color="text-[#0A0A0A]"
                    fontFamily="helveticaNeue"
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
