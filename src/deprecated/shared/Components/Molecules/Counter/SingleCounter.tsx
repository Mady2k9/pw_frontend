import { useEffect, useRef, useState, memo } from 'react';
const SingleCounter = ({
  digit,
  height,
  width,
}: {
  digit: number;
  height: number;
  width: number;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (entry.isIntersecting) {
        setIsInViewport(true);
      }
    });
  };
  const marginTop = digit == 0 ? 10 * height : digit * height;
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      className={`relative overflow-y-hidden`}
      style={{ height: height, width: width }}
    >
      <div
        ref={targetRef}
        className={`absolute transition-[top]  ease-in-out left-0`}
        style={{
          top: isInViewport ? -marginTop : 0,
          transitionDuration: '2000ms !important',
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, index) => (
          <div
            key={index}
            className={`h-[${height}px] w-[${width}px] text-center`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(SingleCounter);
