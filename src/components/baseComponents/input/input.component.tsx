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

/**
 *
 * @param {InputProps} props props for Input component
 * @param {string} props.label label of the input (optional)
 * @param {string} props.id id of the input (optional)
 * @param {string} props.name name of the input
 * @param {string} props.type type of the input (optional)
 * @param {string} props.value value of the input (optional)
 * @param {string} props.placeholder placeholder of the input (optional)
 * @param {string} props.size size of the input
 * @param {React.ReactNode} props.iconLeft icon left of the input (optional)
 * @param {React.ChangeEvent<HTMLInputElement>} props.onChange onChange of the input
 * @returns {JSX.Element} returns Input component
 */

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
}: InputProps): JSX.Element => {
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
          className={`input-field hide 
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
