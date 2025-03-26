import React from 'react'
import Typography from './Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

const Card = ({icon, text, subtext, background, className}: {icon: IconDefinition, text:  string | React.ReactElement, subtext: string  | React.ReactElement, background?: string, className?: string}) => {
    return <div className={`flex flex-col w-full text-center justify-center items-center hover:bg-black group py-24 px-4 sm:py-12 md:py-24 md:px-8 lg:py-32 ${background} ${className}`}>
        <FontAwesomeIcon height={64} width={64} className='mb-10 text-[#eb2f5b] md:mb-16 md:size-20' icon={icon} />
        {typeof text === 'string'? <Typography className='text-[#111] mb-9 group-hover:text-white font-normal md:text-5xl' fontFamily='womby' variant='h1'>{text}</Typography>: text}
        {typeof subtext === 'string'  ? <Typography className='text-[#555] text-base group-hover:text-white md:text-3xl' fontFamily='womby' variant='p'>{subtext}</Typography>: subtext}
    </div>
}

export default Card