import Typography from '@/components/Typography';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Section from '@/components/Section';

export default function SignUp() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col flex-1 text-center gap-4">
          <Typography className='font-light md:text-2xl' variant='p' color='text-[#eb2f5b]' fontFamily='VarelaRound'>
            Записаться к дизайнеру:
          </Typography>
          <div className="flex flex-col px-4 py-12 bg-white rounded-bubble">
            <Button size='lg'>ОСТАВИТЬ ЗАЯВКУ</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
