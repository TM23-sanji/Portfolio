
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    let animationClass = '';
    
    switch (animation) {
      case 'fade-in':
        animationClass = 'animate-fade-in';
        break;
      case 'slide-left':
        animationClass = 'animate-slide-left';
        break;
      case 'slide-right':
        animationClass = 'animate-slide-right';
        break;
      case 'scale-up':
        animationClass = 'animate-scale-up';
        break;
      default:
        animationClass = 'animate-fade-in';
    }
    
    return animationClass;
  };

  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      ref={sectionRef} 
      className={`${className} ${getAnimationClass()}`}
      style={delay > 0 ? delayStyle : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
