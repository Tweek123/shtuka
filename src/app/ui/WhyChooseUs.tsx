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
            className="text-center mb-8 md:text-3xl leading-[1.5]"
            color="text-black"
            fontFamily="womby"
          >
            <Underline className="leading-[1.18]">
              ПОЧЕМУ НУЖНО ЗАКАЗАТЬ
            </Underline>
            <br />
            <Underline className="leading-[1.18]">ПРОЕКТ У НАС?</Underline>
          </Typography>
          <div className="grid grid-cols-1 -mx-4 md:-mx-8 md:px-36 lg:px-0 lg:grid-cols-3">
            <Card
              className="py-8 w-full"
              icon={faHeart}
              text={'ГАРАНТИИ'}
              subtext={
                'РАБОТАЕМ, ПОКА ВЫ НЕ БУДЕТЕ НА 100% УДОВЛЕТВОРЕНЫ ДИЗАЙНОМ! У НАС ОГРОМНЫЙ ОПЫТ ПО РЕАЛИЗАЦИИ ОБЪЕКТОВ ВСЕ СЧЕТА ОТ ПОСТАВЩИКОВ У ВАС НА РУКАХ К ЗАВЕРШЕНИЮ ПРОЕКТА'
              }
            />
            <Card
              className="py-8 w-full"
              icon={faRocket}
              text={'ВИДЕО ВИЗУАЛИЗАЦИИ'}
              subtext={
                'ВИДЕО ФОРМАТ ВИЗУАЛИЗАЦИИ – ЭТО ЛУЧШЕЕ, ЧТО МОЖНО ПРЕДЛОЖИТЬ ФОТО ДАЕТ НЕ ПОЛНУЯ КАРТИНУ, ТОЛЬКО 2-3 РАКУРСА ЗАГЛЯНИТЕ В БУДУЩЕЕ И ПРОГУЛЯЕТЕСЬ В ИНТЕРЬЕРЕ ОТ ПЕРВОГО ЛИЦА, КАК В КОМПЬЮТЕРНОЙ ИГРЕ'
              }
            />
            <Card
              className="py-8 w-full"
              icon={faUsers}
              text={'ПОДДЕРЖКА'}
              subtext={
                'РЕАЛИЗУЕМ ИНТЕРЬЕРЫ ВПЛОТЬ ДО ВЫБОРА ШТОР И ДЕКОРА. ПОМОЖЕМ С ПОИСКОМ ПОДРЯДЧИКОВ И ПОЛНОСТЬЮ КОМПЛЕКТУЕМ ИНТЕРЬЕР НА СВЯЗИ С ВАМИ И ВАШИМИ СТРОИТЕЛЯМИ'
              }
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
