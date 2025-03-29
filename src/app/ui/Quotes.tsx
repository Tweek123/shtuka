import Container from '../../components/Container';
import Quote from '../../components/Quote';
import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Image from 'next/image';

export default function Quotes() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col w-full">
          <Slider>
            {/* <div className="flex flex-col gap-8 py-8 min-h-screen">
              <div className="flex flex-col gap-8 h-full md:flex-row">
                <div className="aspect-[1023/640] relative">
                  <Image
                    src={'/images/notes/shop-1.jpg'}
                    alt="Hero 1"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="aspect-[2/1] relative">
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
            </div> */}
            <div className="flex flex-col gap-8 py-8 xl:flex-row xl:w-[50%] min-h-screen">
              <div className="flex flex-col h-5/6 w-full flex-grow gap-8 md:flex-row">
                <div className="bg-red-200 w-full h-1/2 relative flex-grow"></div>
                <div className="bg-red-200 w-full h-1/2 relative flex-grow"></div>
              </div>
              <Quote
                className="w-full h-1/6"
                text={
                  'Спасибо, Иван, Барбершоп запустили, удалось реализовать все как по проекту. Марат .\nБарбершоп Че в Уфе'
                }
              />
            </div>
            {/* <div className="flex flex-col gap-8 py-8 min-h-screen">
              <div className="flex flex-col gap-8 md:flex-row h-full">
                <div className="aspect-[1746/1068] h-full relative">
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
            </div> */}
          </Slider>
        </div>
      </Container>
    </Section>
  );
}
