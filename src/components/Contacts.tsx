import Typography from '@/components/Typography';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function Contacts() {
  return (
    <Section background="bg-[#1C1C1C]">
      <Container>
        <div className="flex flex-col flex-1 text-center gap-4">
          <Typography
            className="font-light md:text-xl"
            variant="p"
            color="text-[#eb2f5b]"
            fontFamily="VarelaRound"
          >
            КОНТАКТЫ
          </Typography>
          <Typography
            className="md:text-2xl"
            variant="h1"
            color="text-[#eb2f5b]"
            fontFamily="womby"
          >
            ☎ 8-987-021-99-12
          </Typography>
          <Typography
            className="md:text-2xl"
            variant="h3"
            fontFamily="Metal"
            color="text-white"
          >
            Instagram @shtuka.design
          </Typography>
          <Typography
            className="md:text-2xl"
            variant="h3"
            fontFamily="Metal"
            color="text-white"
          >
            г. Уфа, ВДНХ-ДОМ
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
