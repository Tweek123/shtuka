import Avatar from './Avatar';
import SquareList from './SkyareList';
import Typography from './Typography';

const Owner = ({
  src,
  items,
  title,
}: {
  src: string;
  items: string[];
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="mb-8 lg:hidden" src={src} size="lg" />
      <Avatar className="mb-8 hidden lg:block" src={src} />
      <Typography
        className="whitespace-pre text-center mb-6 font-bold md:text-xl lg:text-sm"
        fontFamily="ArialBlack"
        color="text-black"
        variant="h2"
      >
        {title}
      </Typography>
      <SquareList items={items} />
    </div>
  );
};

export default Owner;
