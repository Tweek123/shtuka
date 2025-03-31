import Section from '@/components/Section';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Card from './ui/Card';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Button from '@/components/Button';
import Quote from '@/components/Quote';
import Avatar from '@/components/Avatar';

const list = [
  'Обмерный план',
  'План монтажа и демонтажа',
  'Схемы монтажа',
  'План перепланировки',
  'План расстановки мебели',
  'План привязки сантехники',
  'План привязки светильников к выключателям',
  'План привязки розеток и выключателей',
  'План привязки светильников',
  'План  полов',
  'План потолков',
  'Развертки стен по каждой комнате с указанием площадей',
  'Подбор отделочных материалов с указанием количества',
  'Подбор светильников с указанием количества',
  'Дополнительные схемы',
  'Видео интерьера',
  'Визуализации интерьера',
];

const questions = [
  {
    title: '-Сколько вариантов\nдизайна ?',
    items: [
      { text: '2', subtext: 'концепции\nинтерьера' },
      { text: '3', subtext: 'варианта\nперепланировки' },
    ],
  },
  {
    title: '-Что ещё ?',
    items: [
      { text: '15+', subtext: 'выездов\nв салоны' },
      { text: '30', subtext: 'листов чертежей\nдля строителей\nи мебельщиков' },
    ],
  },
  {
    title: '-А если не понравится?',
    items: [
      {
        text: '1.',
        subtext:
          'Проводим интервью\nпо вашим\nпредпочтениям\nи смотрим референсы.',
      },
      {
        text: '2.',
        subtext: 'Если не понравится,\nпеределаем,\nно такого еще\nне было!',
      },
    ],
  },
];
export default function Services() {
  return (
    <main className="">
      <Section>
        <Container className="">
          <div className="lg:-mx:16 -mx-4 -my-8 flex min-h-screen flex-grow flex-col items-center justify-center bg-[#111] md:-mx-16 md:-my-16 lg:-my-16">
            <Typography
              className="text-center text-6xl font-normal uppercase text-white md:text-8xl lg:text-6xl"
              variant="h1"
            >
              Проект “КОМФОРТ”
            </Typography>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="-mx-4 -my-8 grid grow grid-cols-1 md:-mx-16 md:-my-16 md:grid-cols-4 md:[grid-template-areas:'col-1_col-1_col-2_col-2'_'col-3_col-3_col-3_col-3'] lg:-my-16 lg:grid-cols-3 lg:[grid-template-areas:'col-1_col-2_col-3']">
            <div className="flex flex-grow flex-col bg-[#fed841] px-4 py-8 md:px-8 md:py-12 md:[grid-area:col-1] lg:py-16">
              <div className="flex flex-col">
                <Typography
                  className="mb-6 font-VarelaRound text-sm font-light uppercase leading-relaxed text-[#eb2f5b] md:mb-8 md:text-2xl lg:text-base"
                  variant="h1"
                >
                  частые вопросы
                </Typography>
                {questions.map(({ title, items }) => (
                  <div className="flex flex-col">
                    <Typography
                      variant="h1"
                      className="text-primary mb-4 whitespace-pre font-womby text-3xl font-normal uppercase leading-tight text-[#111] group-hover:text-white md:text-3xl lg:mb-8 lg:text-center lg:text-xl"
                    >
                      {title}
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                      {items.map(({ text, subtext }) => (
                        <div className="flex flex-col">
                          <Typography
                            className="text-primary mb-4 text-center font-womby text-3xl font-bold uppercase leading-tight text-white md:whitespace-pre md:text-center md:text-7xl lg:mb-2"
                            variant="h1"
                          >
                            {text}
                          </Typography>
                          <Typography
                            className="mb-6 text-center font-VarelaRound text-sm font-light uppercase leading-relaxed text-black md:mb-8 md:whitespace-pre md:text-center md:text-sm"
                            variant="h1"
                          >
                            {subtext}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:[grid-area:col-2]">
              <Image
                src="/images/services/comfort/bathroom.jpg"
                alt="plan"
                fill
              />
            </div>
            <div className="flex flex-col bg-black px-4 py-8 md:[grid-area:col-3]">
              <Typography
                className="mb-6 font-VarelaRound text-sm font-light uppercase leading-relaxed text-[#eb2f5b] md:mb-8 md:text-2xl lg:text-base"
                variant="h1"
              >
                состав альбома проекта "КОМФОРТ"
              </Typography>
              <Typography
                className="mb-4 font-womby text-3xl font-bold uppercase leading-tight text-white md:text-3xl"
                variant="h1"
              >
                Более 30 листов чертежей
              </Typography>
              <Typography
                variant="h1"
                className="text-primary mb-8 font-womby text-base font-bold leading-relaxed text-white group-hover:text-white md:text-xl lg:text-base"
              >
                <ul className="list-inside list-none gap-4">
                  {list.map((text, i) => (
                    <li className="relative flex flex-row gap-4">
                      <span className="absolute left-0 w-5 text-right text-[#777777]">
                        {i + 1}.
                      </span>{' '}
                      <span className="ml-8">{text}</span>
                    </li>
                  ))}
                </ul>
              </Typography>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="-my-8 grid grow grid-cols-1 md:-mx-16 md:-my-16 md:grid-cols-2 lg:-my-16 lg:grid-cols-3">
            <div className="relative -mx-4 flex aspect-square flex-grow flex-col md:mx-0 md:aspect-auto">
              <Image
                src="/images/services/comfort/livingroom.jpg"
                alt="plan"
                fill
              />
            </div>
            <div className="mx-auto flex flex-col py-8 md:px-8">
              <Quote
                className="mb-8"
                text={
                  '“Пройдите быстрый тест из 5\n\nвопросов и рассчитайте стоимость\n\n проекта.”'
                }
              />
              <div className="mb-8 flex flex-row items-center">
                <Avatar
                  className="md:hidden"
                  size="sm"
                  hasBorder={false}
                  src="/images/services/comfort/zhigulev.jpg"
                />
                <Avatar
                  className="hidden md:flex"
                  size="md"
                  hasBorder={false}
                  src="/images/services/comfort/zhigulev.jpg"
                />
                <div className="flex flex-col">
                  <Typography
                    className="md:text-2xl lg:text-sm"
                    variant="p"
                    color="text-black"
                    fontFamily="womby"
                  >
                    Иван Жигулев
                  </Typography>
                  <Typography
                    className="text-gray-400 md:text-2xl lg:text-sm"
                    variant="p"
                    fontFamily="womby"
                  >
                    Дизайнер студии SHTUKA
                  </Typography>
                </div>
              </div>
              <Button size="lg" className="bg-black">
                РАССЧИТАТЬ ПРОЕКТ
              </Button>
            </div>
            <div className="relative -mx-4 flex aspect-square flex-grow flex-col md:mx-0 md:aspect-auto">
              <Image
                src="/images/services/comfort/pink-bathroom.jpg"
                alt="plan"
                fill
              />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
