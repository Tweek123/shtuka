const Video = ({src, className}: {src: string, className?: string}) => {
    return <div className={`flex flex-col aspect-video lg:aspect-[1.2/1] ${className}`}>
    <iframe width="100%" height="100%" src={src} frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
    </div>
}

export default Video