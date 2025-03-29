import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Typography from '../../components/Typography';

export default function ProjectCost() {
  return (
    <Section className="">
      <Container className="">
        <div className="flex flex-col flex-1 gap-8 md:gap-12">
          <Card
            className="lg:py-12 xl:!py-24"
            background="bg-[#f7f7f7]"
            icon={faHouse}
            text={'РАССЧИТАЙТЕ СТОИМОСТЬ ДИЗАЙН ПРОЕКТА'}
            subtext={'ОТВЕТЬТЕ НА 5 ВОПРОСОВ И ПОДБЕРИТЕ СОСТАВ ПРОЕКТА'}
          />
          <Button className="bg-black md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
          <Button size="lg" className="hidden bg-black md:block text-nowrap">
            РАССЧИТАТЬ ПРОЕКТ
          </Button>
        </div>
      </Container>
    </Section>
  );
}
