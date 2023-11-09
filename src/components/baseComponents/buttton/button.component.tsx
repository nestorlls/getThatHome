import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: 'primary' | 'secondary' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  typeBtn = 'primary',
  size = 'medium',
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <button className={`btn ${typeBtn} ${size}`} {...props}>
      {leftIcon ? <span>{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span>{rightIcon}</span> : null}
    </button>
  );
};
