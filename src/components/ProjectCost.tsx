import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Card from './Card';
import Container from './Container';
import Section from './Section';
import Typography from './Typography';

export default function ProjectCost() {
  return (
    <Section className="!px-0">
      <Container className="lg:!py-0 lg:!pb-12">
        <div className="flex flex-col flex-1 gap-4 md:gap-24 lg:gap-12 xl:gap-12">
          <Card
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
