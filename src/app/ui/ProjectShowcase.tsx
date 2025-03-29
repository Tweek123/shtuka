import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Card from '@/components/Card';
import Video from '@/components/Video';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ProjectShowcase() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-8 md:gap-12 lg:-my-12 lg:gap-4">
            <Card
              className="lg:py-12 xl:!py-24"
              icon={faHouse}
              text={'ПРОЕКТИРУЕМ ЧАСТНЫЕ И КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 15 ЛЕТ'}
              subtext={'СМОТРИТЕ ВИДЕО ОБЗОРЫ ПРОЕКТОВ:'}
            />
            <div className="-mx-4 grid flex-grow grid-cols-1 gap-10 md:-mx-8 lg:grid-cols-3 lg:gap-2 xl:px-0">
              <Video src="https://rutube.ru/play/embed/05d273dfa2a39fc4f8b5070df6a73200/" />
              <Video src="https://rutube.ru/play/embed/b40bccbb08a8a3cf8941f68906c56eac/" />
              <Video src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
