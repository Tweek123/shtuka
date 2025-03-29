import React from "react";
import Typography from "./Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

const Info = ({
  icon,
  text,
  subtext,
  className,
}: {
  icon: IconDefinition;
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center px-4 py-24 text-center sm:py-12 md:px-8 md:py-24 ${className} lg:px-4`}
    >
      <FontAwesomeIcon
        height={64}
        width={64}
        className="mb-8 size-16 text-[#ce528e] md:mb-8 md:size-12 lg:mb-4"
        icon={icon}
      />
      {typeof text === "string" ? (
        <Typography
          //ce528e
          className="mb-4 font-normal text-[#111] hover:text-[#ce528e] md:text-3xl lg:mb-2 lg:text-xl xl:mb-2"
          fontFamily="womby"
          variant="h1"
        >
          {text}
        </Typography>
      ) : (
        text
      )}
      {typeof subtext === "string" ? (
        <Typography
          className="text-base font-light text-[#555] group-hover:text-[#ce528e] md:text-xl lg:text-base"
          fontFamily="womby"
          variant="p"
        >
          {subtext}
        </Typography>
      ) : (
        subtext
      )}
    </div>
  );
};

export default Info;
