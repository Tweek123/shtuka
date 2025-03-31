import Typography from '@/components/Typography';
import Container from '../../components/Container';
import Quote from '../../components/Quote';
import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Image from 'next/image';
import Avatar from '@/components/Avatar';
import Underline from '@/components/Underline';

const slidesDesktop = [
  {
    src: '/shtuka/images/notes/notes/1.jpg',
    comment:
      '“В квартире полностью закончен ремонт, поставлена мебель, было оказано полное сопровождение, от проекта до реализации.”',
    author: {
      text: 'Анастасия.',
      subtext: 'Отзыв на дизайн квартиры студии',
    },
  },
  {
    src: '/shtuka/images/notes/notes/2.jpg',
    comment: '“Супер! Иван, ты – гений! Все очень нравится!”',
    author: {
      text: 'Гульшат.',
      subtext: 'Отзыв на дизайн квартиры с терассой',
    },
  },
  {
    src: '/shtuka/images/notes/notes/poll-1.jpg',
    comment: '“БАССЕЙН ГОТОВ! РЕМОНТ ЗАКОНЧИЛИ”',
    author: {
      text: 'Рустам и Татьяна',
      subtext: 'Отзыв на дизайн интерьера дома',
    },
  },
  {
    src: '/shtuka/images/notes/notes/4.jpg',
    comment:
      '“Кто приходит, все в шоке! Зять сказал, что даже в самых крутых 5-звездочных отелях такого не видел! И это, конечно, благодаря вам!”',
    author: {
      text: 'Андрей.',
      subtext: 'Отзыв на дизайн интерьера квартиры',
    },
  },
  {
    src: '/shtuka/images/notes/notes/5.jpg',
    comment:
      '“Закончили ремонт и магазин открыли! Все получилось очень красиво, спасибо за работу! ”',
    author: {
      text: 'Алия.',
      subtext: 'Отзыв на дизайн Кафе-пекарни Шамилевский в Языково',
    },
  },
  {
    src: '/shtuka/images/notes/notes/6.jpg',
    comment:
      '“Спасибо, Иван, Барбершоп запустили, удалось реализовать все как по проекту.”',
    author: {
      text: 'Марат.',
      subtext: 'Отзыв на дизайн Барбершопа "Че"',
    },
  },
];

export default function Quotes() {
  const params = {
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
    },
  };
  return (
    <Section>
      <Container>
        <div className="flex w-full flex-col">
          <Typography
            variant="h1"
            className="mb-8 text-center font-extrabold leading-[1.5] md:text-3xl"
            color="text-black"
            fontFamily="ArialBlack"
          >
            <Underline className="leading-[1.18]">
              ОТЗЫВЫ НА ДИЗАЙН ИНТЕРЬЕРА
            </Underline>
          </Typography>
          <Slider params={params}>
            {slidesDesktop.map(({ src, comment, author }) => (
              <div className="flex flex-row gap-8">
                <div className="relative aspect-[1200/1477] w-4/6">
                  <Image
                    src={src}
                    alt="Hero 1"
                    fill
                    className="object-contain object-top"
                  />
                </div>
                <div className="flex h-fit w-2/6 flex-col">
                  <Quote
                    className="mb-8"
                    textClassName="!text-base md:!text-xs"
                    text={comment}
                  />
                  {author?.text && (
                    <Typography
                      className="mb-2 text-xs uppercase"
                      variant="p"
                      color="text-black"
                      fontFamily="helveticaNeue"
                    >
                      {author.text}
                    </Typography>
                  )}
                  {author?.subtext && (
                    <Typography
                      className="text-xs uppercase"
                      variant="p"
                      color="text-[#0A0A0A]"
                      fontFamily="helveticaNeue"
                    >
                      {author.subtext}
                    </Typography>
                  )}

                  {author?.src && (
                    <Avatar
                      size="sm"
                      hasBorder={false}
                      src="https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg"
                    />
                  )}
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
                    src={'/shtuka/images/notes/appart-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[2433/1081] w-full">
                  <Image
                    src={'/shtuka/images/notes/appart-2.jpg'}
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
