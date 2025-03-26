import Hero from '@/components/Hero';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { faHouse, faPaintRoller, faUsers,faRocket, faHeart } from '@fortawesome/free-solid-svg-icons';
import Video from '@/components/Video';
import Typography from '@/components/Typography';
import Underline from '@/components/Underline';
import Owner from '@/components/Owner';
import Info from '@/components/Info';
import Quote from '@/components/Quote';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Project from '@/components/Project';
import Gallery from '@/components/Gallery';
import Slider from '@/components/Slider';
import Image from 'next/image';
import Divider from '@/components/Divider';

/**
 * The `Home` component represents the main page layout of the website.
 * It includes several sections such as the hero section, project showcase,
 * video reviews, team introduction, owner profiles, client feedback, and testimonials.
 * Each section is wrapped in a `Section` component with content provided by various
 * other components such as `Hero`, `Card`, `Video`, `Typography`, `Owner`, `Info`, and `Quote`.
 */
  /**
   * The `Home` component represents the main page layout of the website.
   * It includes several sections such as the hero section, project showcase,
   * video reviews, team introduction, owner profiles, client feedback, and testimonials.
   * Each section is wrapped in a `Section` component with content provided by various
   * other components such as `Hero`, `Card`, `Video`, `Typography`, `Owner`, `Info`, and `Quote`.
   */
export default function Home() {
  return (
    <main>
      <Hero />
      <Section className='!px-0'>
        <Container className='!py-0'>
          <Card icon={faHouse} text={'ПРОЕКТИРУЕМ ЧАСТНЫЕ И КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 15 ЛЕТ'} subtext={'СМОТРИТЕ ВИДЕО ОБЗОРЫ  ПРОЕКТОВ:'} />
        </Container>
      </Section>
      <Section className='!px-0'>
        <Container>
          <div className="grid grid-cols-1 flex-grow gap-10 md:px-8 lg:grid-cols-3 lg:gap-2">
          <Video src="https://rutube.ru/play/embed/05d273dfa2a39fc4f8b5070df6a73200/" />
          <Video src="https://rutube.ru/play/embed/b40bccbb08a8a3cf8941f68906c56eac/" />
          <Video src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/" />
          </div>
        </Container>
      </Section>
      <Section className="md:px-8">
        <Container>
          <div className="flex flex-col md:py-12">
          <Typography className='text-sm mx-auto mb-6 md:mb-8 md:text-2xl' color='text-[#eb2f5b]' variant='p' fontFamily="VarelaRound">С ВАМИ БУДУТ РАБОТАТЬ</Typography>
          <Typography className='mx-auto text-center mb-6 text-black md:mb-24 md:text-5xl' color='text-[#eb2f5b]' variant='h1' fontFamily="womby">
            СТУДИЯ ШТУКА. 
            <Underline className='leading-[1.18]'>ДИЗАЙН
            ИНТЕРЬЕРА
            В УФЕ  ОТ
            АРХИТЕКТОРА И
            ДИЗАЙНЕРА</Underline>
          </Typography>
          <Button className='md:hidden'>РАССЧИТАТЬ ПРОЕКТ</Button>
          <Button size='lg' className='hidden md:block text-nowrap'>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Owner title={`ЮЛИЯ ЯКОВЛЕВА.\nАРХИТЕКТОР`} src={'/images/avatar/yakovleva.jpg'} items={['Призовое место в конкурсе от 1 ТРЕСТ и ВДНХ на дизайн-проект интерьера квартиры', '15-летний опыт в дизайне интерьеров и высшее архитектурное образование']} />
          <Owner title={`ИВАН ЖИГУЛЁВ.\nДИЗАЙНЕР`} src={'/images/avatar/zhiguliov.jpg'} items={['Реализованы интерьеры домов premium класса, площадью более 500 м2.', 'Так же интерьеры клиник, детских садов, HoReCa объектов и др.']} />
          </div>
        </Container>
      </Section>
      <Section className="!px-0">
        <Container className="!py-0">
          <div className="flex flex-col w-full aspect-[4/5] relative sm:aspect-[2/1]">
          <Image
            src={'/images/custom/clinik.jpg'}
            alt="Avatar"
            fill
            className="object-cover object-[50%_20%]"
          />
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="!py-0">
          <div className="flex flex-col gap-8">
          <Info icon={faHouse} text={'ОТЗЫВЫ О НАС:'} subtext={'РЕАЛИЗАЦИЯ ИНТЕРЬЕРА КОСМЕТОЛОГИИ'} />
          <Quote mode='black' text="“РЕЗУЛЬТАТ ПРЕДВОСХИТИЛ ОЖИДАНИЯ! САМОЕ ГЛАВНОЕ, ЧТО МЫ КАЖДЫЙ ДЕНЬ СЛЫШИМ ХВАЛЕБНЫЕ ОТЗЫВЫ ОБ ИНТЕРЬЕРЕ ОТ КЛИЕНТОВ НАШЕЙ КЛИНИКИ.”" />
          <div className="flex flex-row items-center">
            <Avatar className="md:hidden" size='sm' hasBorder={false} src='https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg' />
            <Avatar className="hidden md:flex" size='md' hasBorder={false} src='https://1shtuka.ru/wordpress/wp-content/uploads/2021/03/7.jpg' />
            <div className="flex flex-col">
            <Typography className="md:text-2xl" variant='p' color='text-black' fontFamily='womby'>ГУЛЬНАРА А.</Typography>
            <Typography className="md:text-2xl" variant='p' color='text-[#0A0A0A]' fontFamily='womby'>ОТЗЫВ НА ДИЗАЙН КЛИНИКИ RESTETICA</Typography>
            </div>
          </div>
          </div>
        </Container>
      </Section>
      <Section className='!px-0'>
        <Container className='!py-0'>
          <div className="flex flex-col gap-8 w-full">
            <Info className="md:text-left" icon={faPaintRoller} text={'ВЫЯВИМ НУЖНЫЙ ВАМ СТИЛЬ ИНТЕРЬЕРА И РЕАЛИЗУЕМ ЕГО'} subtext={'ИНДИВИДУАЛЬНЫЙ ПОДБОР ИНТЕРЬЕРА, В ЗАВИСИМОСТИ ОТ ОСОБЕННОСТЕЙ ПОМЕЩЕНИЯ, ЗАДАЧ И ВАШИХ ПРЕДПОЧТЕНИЙ'} />
            <Slider className='aspect-[4/5] w-full md:hidden'>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/examples/16.jpg'} alt="Example 1" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
                  <Typography className='text-base' color='text-black' variant="h3">ПРОЕКТ ДОМА</Typography>
                  <Typography className='text-base' color='text-black' variant="h3">ЭКЛЕКТИЧНЫЙ ЛЮКС</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-xs' color='text-black' variant="h3">ПРЕМИАЛЬНЫЙ ЭЛЕКТИЧНЫЙ ИНТЕРЬЕР С ЭЛЕМЕНТАМИ КЛАССИЧЕСКОЙ ОТДЕЛКИ</Typography>
                </div>
              </div>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/examples/17.jpg'} alt="Example 2" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
                  <Typography className='text-base' color='text-black' variant="h3">ПРОЕКТ ВЫСТАВКИ</Typography>
                  <Typography className='text-base' color='text-black' variant="h3">СУМАСШЕДШИЕ СНОВЕДЕНИЯ</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-xs' color='text-black' variant="h3">ФОТОЗОНЫ, ПОЗИТИВНЫЕ ЦВЕТА, ПЛАВНЫЕ ФОРМЫ, ДЕМОНСТРАЦИЯ ТКАНЕЙ И МЕБЕЛИ</Typography>
                </div>
              </div>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/examples/19.jpg'} alt="Example 3" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
                  <Typography className='text-base' color='text-black' variant="h3">ПРОЕКТ ИНТЕРЬЕРА</Typography>
                  <Typography className='text-base' color='text-black' variant="h3">СОВРЕМЕННЫЙ И ТЕМНЫЙ</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-xs' color='text-black' variant="h3">ЧЕТКАЯ ГЕОМЕТРИЯ, ТЕМНЫЙ ФОН, ПРИРОДНЫЕ МАТЕРИАЛЫ И ЯРКИЕ АКЦЕНТЫ</Typography>
                </div>
              </div>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/examples/18.jpg'} alt="Example 4" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
                  <Typography className='text-base' color='text-black' variant="h3">ПРОЕКТ ИНТЕРЬЕРА</Typography>
                  <Typography className='text-base' color='text-black' variant="h3">ТРАДИЦИОННАЯ КЛАССИКА</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-xs' color='text-black' variant="h3">ВИНТАЖНЫЕ ЭЛЕМЕНТЫ, СВЕТЛЫЙ ФОН, ТРАДИЦИОННЫЙ СТИЛЬ ЗАГОРОДНОГО ДОМА</Typography>
                </div>
              </div>
              <div className="aspect-[4/5] w-full relative">
                <Image src={'/images/examples/20.jpg'} alt="Example 5" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-4">
                  <Typography className='text-base' color='text-black' variant="h3">ПРОЕКТ КВАРТИРЫ</Typography>
                  <Typography className='text-base' color='text-black' variant="h3">СОВРЕМЕННЫЙ ЭКО</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-xs' color='text-black/80' variant="h3">ОБИЛИЕ СВЕТЛОГО ШПОНА ДЕРЕВА, СВЕТЛЫЕ ТОНА ДЕРЕВА И ОТДЕЛКИ</Typography>
                </div>
              </div>
          </Slider>

          <Slider className='aspect-video w-full hidden md:block'>
              <div className="aspect-[2/1] w-full relative">
                <Image src={'/images/examples/11.jpg'} alt="Example 1" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography className='text-3xl' color='text-black' variant="h3">ПРОЕКТ ДОМА</Typography>
                  <Typography className='text-lg' color='text-black' variant="h3">ЭКЛЕКТИЧНЫЙ ЛЮКС</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-base' color='text-black' variant="h3">ПРЕМИАЛЬНЫЙ ЭЛЕКТИЧНЫЙ ИНТЕРЬЕР С ЭЛЕМЕНТАМИ КЛАССИЧЕСКОЙ ОТДЕЛКИ</Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <Image src={'/images/examples/12.jpg'} alt="Example 2" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography className='text-3xl' color='text-black' variant="h3">ПРОЕКТ ВЫСТАВКИ</Typography>
                  <Typography className='text-lg' color='text-black' variant="h3">СУМАСШЕДШИЕ СНОВЕДЕНИЯ</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-xs' color='text-black' variant="h3">ФОТОЗОНЫ, ПОЗИТИВНЫЕ ЦВЕТА, ПЛАВНЫЕ ФОРМЫ, ДЕМОНСТРАЦИЯ ТКАНЕЙ И МЕБЕЛИ</Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <Image src={'/images/examples/14.jpg'} alt="Example 3" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography className='text-3xl' color='text-black' variant="h3">ПРОЕКТ ИНТЕРЬЕРА</Typography>
                  <Typography className='text-lg' color='text-black' variant="h3">СОВРЕМЕННЫЙ И ТЕМНЫЙ</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-base' color='text-black' variant="h3">ЧЕТКАЯ ГЕОМЕТРИЯ, ТЕМНЫЙ ФОН, ПРИРОДНЫЕ МАТЕРИАЛЫ И ЯРКИЕ АКЦЕНТЫ</Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <Image src={'/images/examples/13.jpg'} alt="Example 4" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography className='text-3xl' color='text-black' variant="h3">ПРОЕКТ ИНТЕРЬЕРА</Typography>
                  <Typography className='text-lg' color='text-black' variant="h3">ТРАДИЦИОННАЯ КЛАССИКА</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-base' color='text-black' variant="h3">ВИНТАЖНЫЕ ЭЛЕМЕНТЫ, СВЕТЛЫЙ ФОН, ТРАДИЦИОННЫЙ СТИЛЬ ЗАГОРОДНОГО ДОМА</Typography>
                </div>
              </div>
              <div className="aspect-[2/1] w-full relative">
                <Image src={'/images/examples/15.jpg'} alt="Example 5" fill className="object-cover object-center" />
                <div className="flex flex-col text-center absolute inset-0 m-auto h-fit bg-white opacity-80 max-w-[80%] w-full p-8 gap-4 rounded-lg">
                  <Typography className='text-3xl' color='text-black' variant="h3">ПРОЕКТ КВАРТИРЫ</Typography>
                  <Typography className='text-lg' color='text-black' variant="h3">СОВРЕМЕННЫЙ ЭКО</Typography>
                  <Divider className="my-2" orientation="horizontal" thickness="1px" />
                  <Typography className='text-base' color='text-black/80' variant="h3">ОБИЛИЕ СВЕТЛОГО ШПОНА ДЕРЕВА, СВЕТЛЫЕ ТОНА ДЕРЕВА И ОТДЕЛКИ</Typography>
                </div>
              </div>
          </Slider>
          </div>
        </Container>
      </Section>
      <Section className='!px-0'>
        <Container>
          <div className="flex flex-col relative pb-8 sm:pb-0">
            <div className="h-full w-full absolute top-0 left-0">
              <Image src={'/images/custom/cosmetology.jpg'} alt="Hero 2" fill className="object-cover object-center" />
            </div>
            <div className="flex flex-col gap-8 ml-auto w-[60%] mb-[120px] z-10 pt-8 sm:w-[55%] md:pt-32">
              <Typography className="md:text-3xl" variant='h3' color='text-black' fontFamily='ArialBlack'>СМОТРИТЕ <Underline gradient='to-[#eb2f5b]'>ВИДЕО ОБЗОР РЕМОНТА</Underline></Typography>
              <Typography className="md:text-3xl" variant='h2' color='text-black' fontFamily='ArialBlack'>КЛИНИКИ КОСМЕТОЛОГИИ RESTETICA, СДЕЛАННЫЙ ПО НАШЕМУ <Underline gradient="to-[#eb2f5b]" >ДИЗАЙН ПРОЕКТУ ИНТЕРЬЕРА</Underline></Typography>
            </div>
            <Video className='z-10 px-4 sm:-mx-4 sm:!aspect-[1.5/1]' src="https://rutube.ru/play/embed/76379aa05adc3e6d3b47fc7f58b44c84/" />
          </div>
        </Container>
      </Section>
      <Section className="sm:py-8" background='bg-[#353535]'>
        <Container>
          <div className="flex flex-col flex-grow bg-[#353535]">
          <div className="flex flex-col gap-8 items-center flex-grow mb-4 text-center md:gap-12 md:mb-12">
            <Typography className="md:text-5xl"variant='h1' fontFamily='ArialBlack' color='text-white'>СДЕЛАЕМ 3D ТУР ВАШЕГО ПРОЕКТА</Typography>
            <Typography className="md:text-3xl"variant='h2' fontFamily='ArialBlack' color='text-white'>ПЕРЕДВИГАЙТЕ ИЗОБРАЖЕНИЕ, ЧТОБЫ УВИДЕТЬ ВСЕ ДЕТАЛИ</Typography>
          </div>
          <div className="flex flex-col -mx-4">
            <iframe className='mb-10 aspect-video' width="100%"allow="xr-spatial-tracking; gyroscope; accelerometer"  scrolling="no" src="https://kuula.co/share/collection/7bCfS?logo=1&amp;info=1&amp;fs=1&amp;vr=0&amp;sd=1&amp;thumbs=1"></iframe>
          </div>
          <div className="flex flex-col gap-8 items-center flex-grow text-center md:gap-12 md:mb-4">
            <Typography className="md:text-5xl" variant='h1' fontFamily='ArialBlack' color='text-white'>ХОТИТЕ ТАК ЖЕ?</Typography>
            <Typography className="md:text-3xl" variant='h2' fontFamily='ArialBlack' color='text-white'>ЗАПОЛНИТЕ ФОРМУ, И МЫ  ВАМИ СВЯЖЕМСЯ</Typography>
            <Button className="md:hidden">РАССЧИТАТЬ ПРОЕКТ</Button>
            <Button className="hidden md:block text-nowrap" size="lg">РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
          </div>
        </Container>
      </Section>
      <Section className='px-0'>
        <Container>
          <div className="flex flex-col">
            <Typography variant='h1' className='text-center mb-8 md:text-5xl' color='text-black' fontFamily='womby'><Underline className="leading-[1.18]">ПОЧЕМУ НУЖНО ЗАКАЗАТЬ ПРОЕКТ У НАС?</Underline></Typography>
            <div className="flex flex-col -mx-4 md:-mx-8">
              <Card className='py-8 w-full' icon={faHeart} text={'ГАРАНТИИ'} subtext={'РАБОТАЕМ, ПОКА ВЫ НЕ БУДЕТЕ НА 100% УДОВЛЕТВОРЕНЫ ДИЗАЙНОМ!У НАС ОГРОМНЫЙ ОПЫТ ПО РЕАЛИЗАЦИИ ОБЪЕКТОВ ВСЕ СЧЕТА ОТ ПОСТАВЩИКОВ У ВАС НА РУКАХ К ЗАВЕРШЕНИЮ ПРОЕКТА'} />
              <Card className='py-8 w-full' icon={faRocket} text={'ВИДЕО ВИЗУАЛИЗАЦИИ'} subtext={'ВИДЕО ФОРМАТ ВИЗУАЛИЗАЦИИ – ЭТО ЛУЧШЕЕ, ЧТО МОЖНО ПРЕДЛОЖИТЬ ФОТО  ДАЕТ НЕ ПОЛНУЮ КАРТИНУ, ТОЛЬКО 2-3 РАКУРСА ЗАГЛЯНИТЕ В БУДУЩЕЕ И ПРОГУЛЯЕТЕСЬ В ИНТЕРЬЕРЕ ОТ ПЕРВОГО ЛИЦА, КАК В КОМПЬЮТЕРНОЙ ИГРЕ'} />
              <Card className='py-8 w-full' icon={faUsers} text={'ПОДДЕРЖКА'} subtext={'РЕАЛИЗУЕМ ИНТЕРЬЕРЫ ВПЛОТЬ ДО ВЫБОРА ШТОР И ДЕКОРА. ПОМОЖЕМ С ПОИСКОМ ПОДРЯДЧИКОВ И ПОЛНОСТЬЮ КОМПЛЕКТУЕМ ИНТЕРЬЕР НА СВЯЗИ С ВАМИ И ВАШИМИ СТРОИТЕЛЯМИ'} /> 
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col flex-1">
            <Typography variant='h1' className='text-center mb-16 md:text-5xl' color='text-black' fontFamily='womby'><Underline className='leading-[1.18]'>СЛОЖНЫЕ РЕАЛИЗОВАННЫЕ РЕШЕНИЯ НА НАШИХ ОБЪЕКТАХ:</Underline></Typography>
            <div className="grid grid-cols-1 -mx-4 gap-12 md:grid-cols-2 md:gap-2 md:-mx-0">
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/1.jpg' text={'ХОЛЛ ЧАСТНОГО ДОМА'} subtext={'РОСПИСЬ СТЕН ХУДОЖНИКОМ, ИНДИВИДУАЛЬНЫЙ ДИЗАЙН НАПОЛЬНОЙ ПЛИТКИ'} />
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/2.jpg' text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'} subtext={'ИНДИВИДУАЛЬНЫЙ ДИЗАЙН ПАННО НА СТЕНЕ, ЗИМНИЙ САД ЗА СТЕКЛОМ'} />
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/3.jpg' text={'БАССЕЙН В КОТТЕДЖЕ'} subtext={'СКРУГЛЕННЫЕ СТЕНЫ, ИМИТАЦИЯ СЛЭБОВ КОЛОТОГО КАМНЯ'} />
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/4.jpg' text={'БАННЫЙ КОМПЛЕКС В КОТТЕДЖЕ'} subtext={'БАЛКИ НА ПОТОЛКЕ, НАСТЕННОЕ ПАННО С РАСТЕНИЯМИ'} />  
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/5.jpg' text={'ВАННАЯ КОМНАТА ЧАСТНОГО ДОМА'} subtext={'УНИКАЛЬНАЯ АВТОРСКАЯ МОЗАИКА'} />  
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/6.jpg' text={'ВАННАЯ КОМНАТА С ЗИМНИМ САДОМ'} subtext={'СКАЛА НА СТЕНЕ, МЕБЕЛЬ С ПАННО ИЗ РАСТЕНИЙ, ПАНЕЛИ-РЕЙКИ СО СВЕТОВЫМИ ВСТАВКАМИ'} /> 
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/7.jpg' text={'КОСМЕТОЛОГИЯ'} subtext={'СКРУГЛЕННЫЕ РИФЛЕНЫЕ СТЕНЫ, ВСТРОЕННАЯ МЕБЕЛЬ'} /> 
              <Project className="sm:aspect-[2/1] md:aspect-[1/1.2]" src='/images/projects/8.jpg' text={'КУХНЯ В КОТТЕДЖЕ'} subtext={'ШПОНИРОВАННЫЕ ПОТОЛКИ, ВСТРОЕННАЯ МЕБЕЛЬ'} />   
            </div>
          </div>
        </Container>
      </Section>

      <Section className='!px-0'>
        <Container>
          <div className="flex flex-col flex-1 gap-4 md:gap-24">
            <Card background='bg-[#f7f7f7]' icon={faHouse} text={'РАССЧИТАЙТЕ СТОИМОСТЬ ДИЗАЙН ПРОЕКТА'} subtext={'ОТВЕТЬТЕ НА 5 ВОПРОСОВ И ПОДБЕРИТЕ СОСТАВ ПРОЕКТА'} />
            <Button className='bg-black md:hidden'>РАССЧИТАТЬ ПРОЕКТ</Button>
            <Button size="lg" className='hidden bg-black md:block text-nowrap'>РАССЧИТАТЬ ПРОЕКТ</Button>
          </div>
        </Container>
      </Section>
      <Section background='bg-black'>
        <Container>
          <div className="flex flex-col">
            <Typography className='mb-8 md:text-5xl md:mb-16' variant='h1' color='text-white' fontFamily='ArialBlack'>
              ПРОЕКТЫ ДИЗАЙНА ИНТЕРЬЕРА <Underline className='leading-[1.18]' gradient="to-[#eb2f5b]">КВАРТИР, ДОМОВ И КОММЕРЧЕСКИХ ОБЪЕКТОВ</Underline>
            </Typography>
            <Gallery />
          </div>
        </Container>                                      
      </Section>
      <Section >
        <Container>
          <div className="flex flex-col w-full">
            <Slider>
              <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-8 md:flex-row">
              <div className="aspect-[1023/640] w-full relative">
                  <Image src={'/images/notes/shop-1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
              <div className="aspect-[739/1280] w-full relative">
                <Image src={'/images/notes/shop-2.jpg'} alt="Hero 1" fill className="object-cover object-center" />
              </div>
              </div>
              <Quote className='max-w-full' text={'Закончили ремонт и магазин открыли! Все получилось очень красиво, спасибо за работу! \nАлия. Магазин-пекарня в Языково'} />
              </div>
              <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-8 md:flex-row">
              <div className="aspect-[2061/1280] w-full relative">
                  <Image src={'/images/notes/barber-1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
                <div className="aspect-[958/734] w-full relative">
                  <Image src={'/images/notes/barber-2.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
              </div>
              <Quote className='max-w-full ' text={'Спасибо, Иван, Барбершоп запустили, удалось реализовать все как по проекту. Марат .\nБарбершоп Че в Уфе'} />
              </div>
              <div className="flex flex-col gap-8 py-8">
              <div className="flex flex-col gap-8 md:flex-row">
              <div className="aspect-[1746/1068] w-full relative">
                  <Image src={'/images/notes/appart-1.jpg'} alt="Hero 1" fill className="object-cover object-center" />
                </div>
              <div className="aspect-[2433/1081] w-full relative">
                  <Image src={'/images/notes/appart-2.jpg'} alt="Hero 1" fill className="object-cover object-center" />
              </div>
              </div>
              <Quote className='max-w-full' text={'В квартире полностью закончен ремонт, поставлена мебель, было оказано полное сопровождение, от проекта до реализации.'} />
              </div>
            </Slider>
          </div>
        </Container>
      </Section>
      <Section background='bg-[#EFEFEF]'>
        <Container>
          <div className="flex flex-col">
            <Typography className='mb-8 font-light md:mb-8 md:text-2xl' variant='p' color='text-[#eb2f5b]' fontFamily='VarelaRound'>
            ЕСТЬ СОМНЕНИЯ?
            </Typography>
            <Typography className='mb-8 md:text-5xl' variant='h1' color='text-black' fontFamily='womby'>
              ХОТИТЕ ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ ДИЗАЙНЕРА <Underline className='leading-[1.18]' gradient="to-[#eb2f5b]">БЕСПЛАТНО?</Underline>
            </Typography>
            <Typography className='mb-8 font-light md:text-3xl md:mb-20' variant='h3' fontFamily="Metal" color='text-black'>
            Записывайтесь на консультацию с дизайнером интерьера! Мы обсудим вашу планировку и вы точно поймете, нужен ли вам дизайн проект интерьера.
            </Typography>
            <div className="flex flex-col px-4 py-12 bg-white rounded-bubble">
            <Typography className='mb-8 text-center font-light md:text-3xl' variant='h3' fontFamily="ArialBlack" color='text-black'>
              Записаться к дизайнеру:
            </Typography>
              <Button  size='lg'>ОСТАВИТЬ ЗАЯВКУ</Button>
            </div>
          </div>
        </Container>                                      
      </Section>
      <Section background='bg-[#1C1C1C]'>
        <Container>
          <div className="flex flex-col flex-1 text-center gap-4">
            <Typography className='font-light md:text-2xl' variant='p' color='text-[#eb2f5b]' fontFamily='VarelaRound'>
            КОНТАКТЫ
            </Typography>
            <Typography className='md:text-3xl' variant='h1' color='text-[#eb2f5b]' fontFamily='womby'>
            ☎ 8-987-021-99-12
            </Typography>
            <Typography className='md:text-3xl' variant='h3' fontFamily="Metal" color='text-white'>
            Instagram @shtuka.design
            </Typography>
            <Typography className='md:text-3xl' variant='h3' fontFamily="Metal" color='text-white'>
            г. Уфа, ВДНХ-ДОМ
            </Typography>
          </div>
        </Container>                                      
      </Section>
      {/* <About />
      <Services />
      <Portfolio />
      <Contact /> */}
    </main>
  );
}
