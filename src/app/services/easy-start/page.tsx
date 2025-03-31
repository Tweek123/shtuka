import Section from '@/components/Section';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Card from './ui/Card';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Button from '@/components/Button';
export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Веб-дизайн',
      description:
        'Создаем современные и удобные веб-сайты, которые привлекают внимание и конвертируют посетителей в клиентов.',
      features: [
        'Дизайн landing page',
        'Корпоративные сайты',
        'Интернет-магазины',
        'Адаптивный дизайн',
        'Оптимизация конверсии',
      ],
      image: '/shtuka/images/web-design.jpg',
    },
    {
      id: 2,
      title: 'Брендинг',
      description:
        'Разрабатываем уникальный фирменный стиль, который выделит ваш бренд среди конкурентов.',
      features: [
        'Логотип и айдентика',
        'Брендбук',
        'Упаковка',
        'Маркетинговые материалы',
        'Гайдлайны бренда',
      ],
      image: '/shtuka/images/branding.jpg',
    },
    {
      id: 3,
      title: 'UI/UX Дизайн',
      description:
        'Создаем интуитивно понятные интерфейсы и улучшаем пользовательский опыт ваших продуктов.',
      features: [
        'Мобильные приложения',
        'Веб-приложения',
        'Прототипирование',
        'Пользовательские исследования',
        'Тестирование юзабилити',
      ],
      image: '/shtuka/images/ui-ux.jpg',
    },
  ];

  return (
    <main className="">
      <Section>
        <Container>
          <div className="lg:-mx:16 -mx-4 flex min-h-screen flex-grow flex-col items-center justify-center bg-[#111] md:-mx-16">
            <Typography
              className="text-center text-6xl font-normal uppercase text-white md:text-8xl lg:text-6xl"
              variant="h1"
            >
              Проект “ЛЕГКИЙ СТАРТ”
            </Typography>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,3fr] lg:gap-16">
            <div className="flex flex-col">
              <Typography
                className="mb-6 font-VarelaRound text-sm font-light uppercase leading-relaxed text-[#eb2f5b] md:mb-8 md:text-2xl lg:text-base"
                variant="h1"
              >
                Проект “ЛЕГКИЙ СТАРТ”
              </Typography>
              <Typography
                variant="h1"
                className="text-primary mb-4 font-womby text-3xl font-normal uppercase leading-tight text-[#111] group-hover:text-white md:text-3xl lg:mb-2 lg:text-xl xl:mb-2"
              >
                Проект для ремонта без ошибок
              </Typography>
              <Typography
                variant="h1"
                className="text-primary font-womby text-base font-light leading-relaxed text-[#555] group-hover:text-white md:text-xl lg:text-base"
              >
                Дизайн – проект “ЛЕГКИЙ СТАРТ” содержит в себе все необходимые
                материалы для ремонта. Самое важное в интерьере – это грамотное
                планировочное решение, расстановка мебели и удобно выведенная
                электрика. Вы получаете от 3-ех вариантов планировки и чертежи
                на электрику, демонтаж и монтаж.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:-mt-12">
              <Card
                icon={faHouse}
                text={'Понятно'}
                subtext={
                  'Понятные чертежи и 3d схемы с мебелью. Ремонт пройдет без ошибок!'
                }
              />
              <Card
                icon={faHouse}
                text={'По карману'}
                subtext={
                  'Всего от 5 000 руб. за комнату или от 800 р /м2 при заказе все площади.'
                }
              />
              <Card
                icon={faHouse}
                text={'Быстро'}
                subtext={
                  'Проект “ЛЕГКИЙ СТАРТ” в среднем готовится 2 недели (на среднюю квартиру).'
                }
              />
              <Card
                icon={faHouse}
                text={'Удобно'}
                subtext={
                  'Все подсчитано! Покупайте электрооборудование и мебель, пользуясь проектом.'
                }
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div className="mb-8 flex flex-col">
              <Typography
                variant="h1"
                className="text-primary mb-4 font-womby text-3xl font-normal uppercase leading-tight text-[#111] group-hover:text-white md:text-3xl lg:mb-2 lg:text-xl xl:mb-2"
              >
                Какие проблемы решит проект?
              </Typography>
              <Typography
                variant="h1"
                className="text-primary font-womby text-base font-light leading-relaxed text-[#555] group-hover:text-white md:text-xl lg:text-base"
              >
                <ul>
                  <li>
                    Вы определитесь с размерами всей корпусной и мягкой мебели
                    для заказа.
                  </li>
                  <li>
                    У вас будут на руках чертежи на электрику, по которым будет
                    производится электромонтаж
                  </li>
                  <li>
                    Розетки и выключатели будут расположены в соответствии с
                    габаритами мебели, не будет неприятных сюрпризов.
                  </li>
                  <li>
                    Планировка и расстановка мебели, созданная специалистом
                    повысит уровень комфорта вашей жизни на долгие года.
                  </li>
                </ul>
              </Typography>
            </div>
            <div className="flex flex-col gap-8 md:justify-center">
              <div className="relative -mx-4 flex aspect-video flex-col md:mx-0">
                <Image
                  src="/shtuka/images/services/easy/plan.jpg"
                  alt="plan"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#fed841]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-[4fr,5fr]">
            <div className="flex flex-grow flex-col">
              <div className="relative -mx-4 -my-8 flex aspect-[1/2] flex-grow flex-col md:m-auto md:max-w-xs lg:max-w-lg">
                <Image
                  src="/shtuka/images/services/easy/plan-2.jpg"
                  alt="plan"
                  fill
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Typography
                className="mx-auto mb-4 font-womby text-3xl font-bold uppercase leading-tight text-black md:text-3xl xl:mb-8"
                variant="h1"
              >
                Чертежи для эргономичного интерьера за 2 недели.
              </Typography>
              <Typography
                variant="h1"
                className="text-primary mb-4 font-womby text-base font-bold leading-relaxed text-black group-hover:text-white md:text-xl lg:text-base"
              >
                Состав проекта “ЛЕГКИЙ СТАРТ”:
              </Typography>
              <Typography
                variant="h1"
                className="text-primary mb-8 font-womby text-base font-bold leading-relaxed text-black group-hover:text-white md:text-xl lg:text-base"
              >
                <ul className="flex flex-col gap-4">
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    Планировочное решение – от 3-х вариантов
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    План расстановки мебели – от 3-х вариантов
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    План монтажа и демонтажа
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    План открывания дверей
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    План привязки освещения
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    План привязки выключателей
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    План привязки розеток
                  </li>
                  <li className="relative pl-5">
                    <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
                    3d схемы помещений с мебелью
                  </li>
                </ul>
              </Typography>
              <Button size="lg" className="mx-0 mr-auto bg-black">
                РАССЧИТАТЬ ПРОЕКТ
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
