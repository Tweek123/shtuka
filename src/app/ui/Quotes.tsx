import Container from '../../components/Container';
import Quote from '../../components/Quote';
import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Image from 'next/image';

export default function Quotes() {
  return (
    <Section>
      <Container>
        <div className="flex w-full flex-col">
          <Slider>
            <div className="flex min-h-screen flex-col gap-8 py-8">
              <div className="flex h-full flex-col gap-8 md:flex-row">
                <div className="relative aspect-[1023/640]">
                  <Image
                    src={'/images/notes/shop-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative aspect-[2/1]">
                  <Image
                    src={'/images/notes/shop-2.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <Quote
                className="max-w-full xl:max-w-[50%]"
                text={
                  'Закончили ремонт и магазин открыли! Все получилось очень красиво, спасибо за работу! \nАлия. Магазин-пекарня в Языково'
                }
              />
            </div>
            <div className="flex min-h-screen flex-col gap-8 py-8 xl:w-[50%] xl:flex-row">
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
            </div>
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
