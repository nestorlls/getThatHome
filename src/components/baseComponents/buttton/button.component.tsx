import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: 'primary' | 'secondary' | 'subtle';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Renders a button component with customizable properties.
 *
 * @param {React.FC<ButtonProps>} ButtonProps - The props for the Button component.
 * @param {React.ReactNode} children - The child elements of the Button.
 * @param {string} typeBtn - The type of button (default: 'primary').
 * @param {string} size - The size of the button (default: 'medium').
 * @param {React.ReactNode} leftIcon - The left icon element of the button.
 * @param {React.ReactNode} rightIcon - The right icon element of the button.
 * @param {...any} props - Additional props for the button element.
 * @returns {React.ReactNode} The rendered button component.
 */
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
