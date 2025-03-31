import { House } from '@/components/Icons';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Section from '../../components/Section';

export default function ProjectCost() {
  return (
    <Section className="">
      <Container className="">
        <div className="flex flex-1 flex-col gap-8 md:gap-8">
          <Card
            className="lg:py-12 xl:!py-24"
            background="bg-[#f7f7f7]"
            Icon={House}
            text={'РАССЧИТАЙТЕ СТОИМОСТЬ ДИЗАЙН ПРОЕКТА'}
            subtext={'ОТВЕТЬТЕ НА 5 ВОПРОСОВ И ПОДБЕРИТЕ СОСТАВ ПРОЕКТА'}
          />
          <Button className="bg-black md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
          <Button size="lg" className="hidden text-nowrap bg-black md:block">
            РАССЧИТАТЬ ПРОЕКТ
          </Button>
        </div>
      </Container>
    </Section>
  );
}
