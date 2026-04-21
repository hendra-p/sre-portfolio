import React from 'react';
import { cn } from '../Button/Button'; // Reusing cn utility, ideally put in utils folder

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, hoverable = true, children, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-700 bg-surface text-textMain shadow-sm",
        hoverable && "transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);
