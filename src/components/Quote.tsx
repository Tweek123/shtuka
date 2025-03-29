import Typography from './Typography';

const Quote = ({
  className,
  mode = 'defaut',
  text,
}: {
  className?: string;
  mode?: 'defaut' | 'black';
  text: string;
}) => {
  if (mode === 'black') {
    return (
      <div className={`border-8 border-[#EB2F5B] ${className}`}>
        <div className="flex-colp-4 relative flex bg-[#111111] p-8">
          <Typography
            className="whitespace-pre text-lg uppercase leading-[3] md:text-3xl lg:text-base"
            variant="h1"
            fontFamily="ArialBlack"
            color="text-white"
          >
            {text}
          </Typography>
          <div className="absolute bottom-[-20px] left-[40px] h-[0px] w-[0px] border-[12px] border-transparent border-l-[#111111] border-t-[#111111]"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col border-8 border-[#EB2F5B] p-4 ${className}`}
    >
      <Typography
        className="whitespace-pre whitespace-pre-line text-lg uppercase leading-[3] md:text-3xl lg:text-base"
        variant="h1"
        fontFamily="ArialBlack"
        color="text-[#332f2f]"
      >
        {text}
      </Typography>
      <div className="absolute bottom-[-28px] left-[40px] h-[0px] w-[0px] border-[12px] border-transparent border-l-[#EB2F5B] border-t-[#EB2F5B]"></div>
    </div>
  );
};

export default Quote;
