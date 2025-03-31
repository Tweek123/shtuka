import Section from '@/components/Section';
import Container from '@/components/Container';
import Typography from '@/components/Typography';
import Card from './ui/Card';
import Project from '@/components/Project';

const cards = [
  {
    text: 'Дизайн.',
    subtext:
      'Вы получите дизайн, разработанный с учетом ваших пожеланий и бюджета. Мы подберем все отделочные материалы. Дизайн будет презентован реалистичными 3d визуализациями.',
  },
  {
    text: 'Чертежи.',
    subtext:
      'Мы делаем только реализуемые проекты, подкрепленные подробными чертежами. У строителей и подрядчиков не будет вопросов, они получат четкое руководство по ремонту.',
  },
  {
    text: 'Поиск исполнителей.',
    subtext:
      'За продолжительный опыт работы мы собрали базу надежных  строителей и других исполнителей. Вы получите услуги, оказанные на высшем уровне и не наткнетесь на некачественную работу.',
  },
  {
    text: 'Заказ и закупка.',
    subtext:
      'Подсчитаем расход всех отделочных материалов, электрооборудования и сантехники и закажем их по лучшей цене со скидками от 10%. Вы освободите время от общения с менеджерами и проверки счетов.',
  },
  {
    text: 'Авторский надзор.',
    subtext:
      'Курирование ремонта на стройке, своевременное решение возникающих вопросов. Работа с мебельщиками, строителями, поставщиками и другими исполнителями.',
  },
  {
    text: 'Еженедельные отчеты.',
    subtext:
      'Будем держать руку на пульсе, проверять состояние ремонта и предоставлять еженедельные отчеты. Большой опыт на стройках позволяет нам своевременно обнаруживать проблемы с исполнителями и устранять их.',
  },
];

const projects = [
  {
    text: 'ЭКСКЛЮЗИВНЫЕ РАБОТЫ',
    subtext: 'ЧЕРТЕЖИ И ЛЕКАЛА НА НАБОРНЫЕ ПОЛЫ',
  },
  {
    text: 'НАПОЛНЕНИЕ ИНТЕРЬЕРА',
    subtext: 'ЧЕРТЕЖИ И ЛЕКАЛА НА НАБОРНЫЕ ПОЛЫ',
  },
  {
    text: 'ЭКСКЛЮЗИВНЫЕ РАБОТЫ',
    subtext: 'ЧЕРТЕЖИ И ЛЕКАЛА НА НАБОРНЫЕ ПОЛЫ',
  },
  {
    text: 'ЭКСКЛЮЗИВНЫЕ РАБОТЫ',
    subtext: 'ЧЕРТЕЖИ И ЛЕКАЛА НА НАБОРНЫЕ ПОЛЫ',
  },
  {
    text: 'ЭКСКЛЮЗИВНЫЕ РАБОТЫ',
    subtext: 'ЧЕРТЕЖИ И ЛЕКАЛА НА НАБОРНЫЕ ПОЛЫ',
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
              Проект “ПРЕМИУМ”
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
                  проект "ПРЕМИУМ"
                </Typography>
                <div className="flex flex-col">
                  <Typography
                    variant="h1"
                    className="text-primary mb-4 font-womby text-3xl font-normal uppercase leading-tight text-[#111] group-hover:text-white md:text-3xl lg:mb-8 lg:text-center lg:text-xl"
                  >
                    Полный контроль за стройкой для идеального результата.
                  </Typography>
                  <Typography
                    variant="h1"
                    className="text-primary text-primary mb-8 font-VarelaRound font-womby text-3xl font-light text-black group-hover:text-white md:text-xl lg:text-base"
                  >
                    Контроль закупок, поиск оптимальных цен и подготовка счетов,
                    ежедневное общение со строителями и исполнителями, авторский
                    надзор.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col">
            {cards.map((card) => (
              <Card {...card} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Project src={''} text={''} subtext={''} />
        </Container>
      </Section>
    </main>
  );
}
