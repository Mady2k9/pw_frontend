const VideoComponentPopup = ({
  className,
  src,
  title,
}: {
  className: string;
  src: string;
  title?: string;
}) => {
  return (
    <iframe
      data-testid="videoPlayerId"
      className={className}
      width={1000}
      height={560}
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default VideoComponentPopup;
