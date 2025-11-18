import React from 'react';
import { Button } from './button';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export function ButtonPrimary({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonPrimaryProps) {
  const baseClasses = 'rounded-full transition-all duration-200 flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-[--color-primary-green] text-[--color-text-on-primary] hover:bg-[--color-primary-green-dark] shadow-md hover:shadow-lg',
    secondary: 'bg-[--color-bg-card] text-[--color-text-secondary] border-2 border-[--color-primary-green] hover:bg-[--color-primary-green] hover:text-white',
    icon: 'bg-[--color-primary-green] text-[--color-text-on-primary] hover:bg-[--color-primary-green-dark] w-12 h-12 p-0'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${variant !== 'icon' ? sizeClasses[size] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
