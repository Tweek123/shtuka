import Typography from '@/components/Typography';
import Container from '../../components/Container';
import Quote from '../../components/Quote';
import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Image from 'next/image';
import Avatar from '@/components/Avatar';

const slidesDesktop = [
  {
    src: '/images/notes/shop-1.jpg',
    comment:
      '“РЕЗУЛЬТАТ ПРЕДВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”',
    author: {
      src: '/images/notes/shop-1.jpg',
      text: 'РУКОВОДИТЕЛЬ КОСМЕТоЛОГИческой клиники, АМНИЕВА ГУЛЬНАРА',
      subtext: 'Отзыв на дизайн интерьера Клиники RESTETICA в Уфе',
    },
  },
  {
    src: '/images/notes/shop-2.jpg',
    comment:
      '“РЕЗУЛЬТАТ ПРЕДВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”',
    author: {
      src: '/images/notes/shop-1.jpg',
      text: 'РУКОВОДИТЕЛЬ КОСМЕТоЛОГИческой клиники, АМНИЕВА ГУЛЬНАРА',
      subtext: 'Отзыв на дизайн интерьера Клиники RESTETICA в Уфе',
    },
  },
];

export default function Quotes() {
  const params = {
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Section>
      <Container>
        <div className="flex w-full flex-col">
          <Slider params={params}>
            {slidesDesktop.map(({ src, comment, author }) => (
              <div className="flex flex-col gap-8 py-8 lg:flex-row">
                <div className="relative aspect-[1023/640] lg:w-1/2">
                  <Image
                    src={src}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col lg:h-fit lg:w-1/2">
                  <Quote
                    className="max-w-full lg:mb-8 lg:max-w-none"
                    text={comment}
                  />

                  <Typography
                    className="uppercase md:text-2xl lg:mb-2 lg:text-xs"
                    variant="p"
                    color="text-black"
                    fontFamily="helveticaNeue"
                  >
                    {author.text}
                  </Typography>
                  <Typography
                    className="uppercase md:text-2xl lg:text-xs"
                    variant="p"
                    color="text-[#0A0A0A]"
                    fontFamily="helveticaNeue"
                  >
                    {author.subtext}
                  </Typography>
                  <Avatar
                    className="hidden md:flex"
                    size="sm"
                    hasBorder={false}
                    src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
                  />
                </div>
              </div>
            ))}
            {/* <div className="flex min-h-screen flex-col gap-8 py-8 xl:w-[50%] xl:flex-row">
              <div className="flex h-5/6 w-full flex-grow flex-col gap-8 md:flex-row">
                <div className="relative h-1/2 w-full flex-grow bg-red-200"></div>
                <div className="relative h-1/2 w-full flex-grow bg-red-200"></div>
              </div>
              <Quote
                className="h-1/6 w-full"
                text={
                  'Спасибо, Иван, Барбершоп запустили, удалось реализовать все как по проекту. Марат .\nБарбершоп Че в Уфе'
                }
              />
            </div>
            <div className="flex min-h-screen flex-col gap-8 py-8">
              <div className="flex h-full flex-col gap-8 md:flex-row">
                <div className="relative aspect-[1746/1068] h-full">
                  <Image
                    src={'/images/notes/appart-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[2433/1081] w-full">
                  <Image
                    src={'/images/notes/appart-2.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <Quote
                className="max-w-full"
                text={
                  'В квартире полностью закончен ремонт, поставлена мебель, было оказано полное сопровождение, от проекта до реализации.'
                }
              />
            </div> */}
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
