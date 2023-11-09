import React from 'react';

interface InputProps {
  label?: string;
  id?: string;
  name: string;
  type?: string;
  value?: number | string;
  placeholder?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  iconLeft?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type,
  size,
  value,
  iconLeft,
  onChange,
  ...props
}): JSX.Element => {
  return (
    <div>
      {label && (
        <label className="label" id={id || name}>
          {label}
        </label>
      )}
      <div className="input-wrapper">
        {iconLeft && <span className="icon_left">{iconLeft}</span>}
        <input
          className={`input-field 
                    ${iconLeft ? 'pl-8' : ''} 
                    ${size ? size : ''}`.trim()}
          type={type || 'text'}
          id={id}
          name={name}
          value={value || ''}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
};
