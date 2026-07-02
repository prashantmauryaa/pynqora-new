import React from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '', index = 0 }) => (
  <div 
    className={`scroll-stack-card ${itemClassName}`.trim()}
    style={{ top: `calc(120px + ${index * 20}px)` }}
  >
    {children}
  </div>
);

const ScrollStack = ({ children, className = '' }) => {
  return (
    <div className={`scroll-stack-scroller ${className}`.trim()}>
      <div className="scroll-stack-inner">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { index });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
