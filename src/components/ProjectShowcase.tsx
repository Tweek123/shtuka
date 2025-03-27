import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Card from '@/components/Card';
import Video from '@/components/Video';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function ProjectShowcase() {
  return (
    <>
      <Section className="!px-0">
        <Container className="!py-0 xl:!py-8">
          <div className="flex flex-col flex-grow">
            <Card
              className="lg:py-12 xl:!py-24"
              icon={faHouse}
              text={'ПРОЕКТИРУЕМ ЧАСТНЫЕ И КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 15 ЛЕТ'}
              subtext={'СМОТРИТЕ ВИДЕО ОБЗОРЫ ПРОЕКТОВ:'}
            />
            <div className="grid grid-cols-1 flex-grow gap-10 md:px-8 lg:grid-cols-3 lg:gap-2 xl:px-0 xl:py-8">
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
