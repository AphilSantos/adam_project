import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'scroll-animate',
  threshold = 0.1,
  delay = 0
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`${animationType} ${isVisible ? 'animate-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;