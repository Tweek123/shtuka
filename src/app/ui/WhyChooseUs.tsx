import Typography from '@/components/Typography';
import Card from '@/components/Card';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { faHeart, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import Underline from '@/components/Underline';

export default function WhyChooseUs() {
  return (
    <Section className="px-0">
      <Container className="lg:!pb-0">
        <div className="flex flex-col">
          <Typography
            variant="h1"
            className="mb-8 text-center font-extrabold leading-[1.5] md:text-3xl"
            color="text-black"
            fontFamily="womby"
          >
            <Underline className="leading-[1.18]">
              ПОЧЕМУ НУЖНО ЗАКАЗАТЬ ПРОЕКТ У НАС?
            </Underline>
          </Typography>
          <div className="m-auto -mx-4 grid grid-cols-1 items-center justify-center md:-mx-8 md:px-36 lg:grid-cols-3 lg:px-0">
            <Card
              className="w-full py-8 lg:px-4"
              icon={faHeart}
              text={'ГАРАНТИИ'}
              subtext={
                'РАБОТАЕМ, ПОКА ВЫ НЕ БУДЕТЕ НА 100% УДОВЛЕТВОРЕНЫ\nДИЗАЙНОМ!\n\nsУ НАС ОГРОМНЫЙ ОПЫТ ПО РЕАЛИЗАЦИИ ОБЪЕКТОВ\n\nВСЕ СЧЕТА ОТ ПОСТАВЩИКОВ У ВАС НА РУКАХ К\nЗАВЕРШЕНИЮ ПРОЕКТА'
              }
            />
            <Card
              className="w-full py-8 lg:px-4"
              icon={faRocket}
              text={'ВИДЕО ВИЗУАЛИЗАЦИИ'}
              subtext={
                'ВИДЕО ФОРМАТ ВИЗУАЛИЗАЦИИ – ЭТО ЛУЧШЕЕ, ЧТО\nМОЖНО ПРЕДЛОЖИТЬ\n\nФОТО ДАЕТ НЕ ПОЛНУЯ КАРТИНУ, ТОЛЬКО 2-3 РАКУРСА\n\nЗАГЛЯНИТЕ В БУДУЩЕЕ И ПРОГУЛЯЕТЕСЬ В ИНТЕРЬЕРЕ ОТ\nПЕРВОГО ЛИЦА, КАК В КОМПЬЮТЕРНОЙ ИГРЕ'
              }
            />
            <Card
              className="w-full py-8 lg:px-4"
              icon={faUsers}
              text={'ПОДДЕРЖКА'}
              subtext={
                'РЕАЛИЗУЕМ ИНТЕРЬЕРЫ ВПЛОТЬ ДО ВЫБОРА ШТОР И\nДЕКОРА.\n\nПОМОЖЕМ С ПОИСКОМ ПОДРЯДЧИКОВ И ПОЛНОСТЬЮ\nКОМПЛЕКТУЕМ ИНТЕРЬЕР\n\nНА СВЯЗИ С ВАМИ И ВАШИМИ СТРОИТЕЛЯМИ'
              }
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
