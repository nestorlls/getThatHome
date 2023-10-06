import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: 'primary' | 'secondary' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  typeBtn = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <button className={`btn ${typeBtn} ${size}`} {...props}>
      {children}
    </button>
  );
};
