import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Info from '@/components/Info';
import Quote from '@/components/Quote';
import Avatar from '@/components/Avatar';
import Typography from '@/components/Typography';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Home } from 'react-feather';

export default function ClientFeedback() {
  return (
    <Section className="!px-0">
      <Container className="!py-0">
        <div className="flex flex-col gap-8">
          <Info
            Icon={Home}
            text={'ОТЗЫВЫ О НАС:'}
            subtext={'РЕАЛИЗАЦИЯ ИНТЕРЬЕРА КОСМЕТОЛОГИИ'}
          />
          <Quote
            mode="black"
            text="“РЕЗУЛЬТАТ ПРЕВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”"
          />
          <div className="flex flex-row items-center">
            <Avatar
              className="md:hidden"
              size="sm"
              hasBorder={false}
              src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
            />
            <Avatar
              className="hidden md:flex"
              size="md"
              hasBorder={false}
              src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
            />
            <div className="flex flex-col">
              <Typography
                className="md:text-sm"
                variant="p"
                color="text-black"
                fontFamily="womby"
              >
                ГУЛЬНАРА А.
              </Typography>
              <Typography
                className="md:text-sm"
                variant="p"
                color="text-[#0A0A0A]"
                fontFamily="womby"
              >
                ОТЗЫВ НА ДИЗАЙН КЛИНИКИ RESTETICA
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
