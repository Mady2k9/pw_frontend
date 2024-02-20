import React, {
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import styles from './SchoolTransitionWrapperLeft.module.css';

type TransitionWrapperProps = {
  children: ReactNode;
  delay?: number;
};

const TransitionWrapperLeft = ({
  children,
  delay = 0,
}: TransitionWrapperProps) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const targetRef = useRef(null);

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => setIsInViewport(true));
      }
    });
  };

  const observerOptions = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: '0px',
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [observerOptions]);

  const transitionClass = isInViewport
    ? `animate-in ${styles[`transition${delay}`] || styles.transition}`
    : '';

  return (
    <div ref={targetRef} className={`${styles.wrapper} ${transitionClass}`}>
      {children}
    </div>
  );
};

export default memo(TransitionWrapperLeft);
