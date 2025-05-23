import Container from '../../components/Container';
import Project from '../../components/Project';
import Section from '../../components/Section';
import Typography from '../../components/Typography';
import Underline from '../../components/Underline';

export default function DifficultSolutions() {
  return (
    <Section>
      <Container className="!pb-0">
        <div className="flex flex-1 flex-col">
          <Typography
            variant="h1"
            className="mb-8 text-center font-extrabold leading-[1.5] md:text-3xl"
            color="text-black"
            fontFamily="ArialBlack"
          >
            <Underline className="leading-[1.18]">
              СЛОЖНЫЕ РЕАЛИЗОВАННЫЕ РЕШЕНИЯ НА НАШИХ ОБЪЕКТАХ:
            </Underline>
          </Typography>
          <div className="-mx-4 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-2 xl:grid-cols-4">
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/1.jpg"
              text={'ХОЛЛ ЧАСТНОГО ДОМА'}
              subtext={
                'РОСПИСЬ СТЕН ХУДОЖНИКОМ, ИНДИВИДУАЛЬНЫЙ ДИЗАЙН НАПОЛЬНОЙ ПЛИТКИ'
              }
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/2.jpg"
              text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'}
              subtext={
                'ИНДИВИДУАЛЬНЫЙ ДИЗАЙН ПАННО НА СТЕНЕ, ЗИМНИЙ САД ЗА СТЕКЛОМ'
              }
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/3.jpg"
              text={'БАССЕЙН В КОТТЕДЖЕ'}
              subtext={'СКРУГЛЕННЫЕ СТЕНЫ, ИМИТАЦИЯ СЛЭБОВ КОЛОТОГО КАМНЯ'}
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/4.jpg"
              text={'БАННЫЙ КОМПЛЕКС В КОТТЕДЖЕ'}
              subtext={'БАЛКИ НА ПОТОЛКЕ, НАСТЕННОЕ ПАННО С РАСТЕНИЯМИ'}
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/5.jpg"
              text={'ВАННАЯ КОМНАТА ЧАСТНОГО ДОМА'}
              subtext={'УНИКАЛЬНАЯ АВТОРСКАЯ МОЗАИКА'}
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/6.jpg"
              text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'}
              subtext={
                'СКАЛА НА СТЕНЕ, МЕБЕЛЬ С ПАННО ИЗ РАСТЕНИЙ, ПАНЕЛИ-РЕЙКИ СО СВЕТОВЫМИ ВСТАВКАМИ'
              }
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/7.jpg"
              text={'КОСМЕТОЛОГИЯ'}
              subtext={'СКРУГЛЕННЫЕ РИФЛЕНЫЕ СТЕНЫ, ВСТРОЕННАЯ МЕБЕЛЬ'}
            />
            <Project
              className="aspect-[545/744] md:aspect-square xl:aspect-[1/1.2]"
              src="/shtuka/images/projects/8.jpg"
              text={'КУХНЯ В КОТТЕДЖЕ'}
              subtext={'ШПОНИРОВАННЫЕ ПОТОЛКИ, ВСТРОЕННАЯ МЕБЕЛЬ'}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
