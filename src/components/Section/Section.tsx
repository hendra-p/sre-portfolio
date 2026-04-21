import React from 'react';
import { cn } from '../../utils/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  containerClass?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, className, containerClass, children, ...props }) => {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)} {...props}>
      <div className={cn("container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl", containerClass)}>
        {title && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-textMain inline-block relative">
              {title}
              <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
