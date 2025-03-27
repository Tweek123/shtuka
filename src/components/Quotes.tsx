import Container from './Container';
import Quote from './Quote';
import Section from './Section';
import Slider from './Slider';
import Image from 'next/image';

export default function Quotes() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col w-full">
          <Slider>
            <div className="flex flex-col gap-8 py-8 h-full">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="aspect-[1023/640] w-full relative">
                  <Image
                    src={'/images/notes/shop-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-[739/1280] w-full relative">
                  <Image
                    src={'/images/notes/shop-2.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
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
            <div className="flex flex-col gap-8 py-8 xl:flex-row xl:w-[50%]">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="aspect-[2061/1280] w-full relative">
                  <Image
                    src={'/images/notes/barber-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-[958/734] w-full relative">
                  <Image
                    src={'/images/notes/barber-2.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <Quote
                className="max-w-full "
                text={
                  'Спасибо, Иван, Барбершоп запустили, удалось реализовать все как по проекту. Марат .\nБарбершоп Че в Уфе'
                }
              />
            </div>
            <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="aspect-[1746/1068] w-full relative">
                  <Image
                    src={'/images/notes/appart-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-[2433/1081] w-full relative">
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
