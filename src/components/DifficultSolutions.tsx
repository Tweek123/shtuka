import Container from './Container';
import Project from './Project';
import Section from './Section';
import Typography from './Typography';
import Underline from './Underline';

export default function DifficultSolutions() {
  return (
    <Section>
      <Container className="xl:pb-0">
        <div className="flex flex-col flex-1">
          <Typography
            variant="h1"
            className="text-center mb-16 md:text-5xl"
            color="text-black"
            fontFamily="womby"
          >
            <Underline className="leading-[1.18]">
              СЛОЖНЫЕ РЕАЛИЗОВАННЫЕ РЕШЕНИЯ НА НАШИХ ОБЪЕКТАХ:
            </Underline>
          </Typography>
          <div className="grid grid-cols-1 -mx-4 gap-12 md:grid-cols-2 md:gap-2 md:-mx- lg:grid-cols-3 xl:grid-cols-4">
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/1.jpg"
              text={'ХОЛЛ ЧАСТНОГО ДОМА'}
              subtext={
                'РОСПИСЬ СТЕН ХУДОЖНИКОМ, ИНДИВИДУАЛЬНЫЙ ДИЗАЙН НАПОЛЬНОЙ ПЛИТКИ'
              }
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/2.jpg"
              text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'}
              subtext={
                'ИНДИВИДУАЛЬНЫЙ ДИЗАЙН ПАННО НА СТЕНЕ, ЗИМНИЙ САД ЗА СТЕКЛОМ'
              }
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/3.jpg"
              text={'БАССЕЙН В КОТТЕДЖЕ'}
              subtext={'СКРУГЛЕННЫЕ СТЕНЫ, ИМИТАЦИЯ СЛЭБОВ КОЛОТОГО КАМНЯ'}
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/4.jpg"
              text={'БАННЫЙ КОМПЛЕКС В КОТТЕДЖЕ'}
              subtext={'БАЛКИ НА ПОТОЛКЕ, НАСТЕННОЕ ПАННО С РАСТЕНИЯМИ'}
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/5.jpg"
              text={'ВАННАЯ КОМНАТА ЧАСТНОГО ДОМА'}
              subtext={'УНИКАЛЬНАЯ АВТОРСКАЯ МОЗАИКА'}
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/6.jpg"
              text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'}
              subtext={
                'СКАЛА НА СТЕНЕ, МЕБЕЛЬ С ПАННО ИЗ РАСТЕНИЙ, ПАНЕЛИ-РЕЙКИ СО СВЕТОВЫМИ ВСТАВКАМИ'
              }
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/7.jpg"
              text={'КОСМЕТОЛОГИЯ'}
              subtext={'СКРУГЛЕННЫЕ РИФЛЕНЫЕ СТЕНЫ, ВСТРОЕННАЯ МЕБЕЛЬ'}
            />
            <Project
              className="sm:aspect-[2/1] md:aspect-[1/1.2] xl:aspect-[1/1.5]"
              src="/images/projects/8.jpg"
              text={'КУХНЯ В КОТТЕДЖЕ'}
              subtext={'ШПОНИРОВАННЫЕ ПОТОЛКИ, ВСТРОЕННАЯ МЕБЕЛЬ'}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
