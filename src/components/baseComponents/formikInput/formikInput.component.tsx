import { useField } from 'formik';

interface FormikInputProps {
  label: string | undefined;
  id: string;
  name: string;
  type?: string;
  value?: string;
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  placeholder?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 *
 * @param {FormikInputProps} props The props for the component.
 * @param {string} props.label The label for the input.
 * @param {string} props.id The id for the input.
 * @param {string} props.name The name for the input.
 * @param {string} props.type The type for the input. Defaults to 'text'.
 * @param {string} props.value The value for the input. (optional)
 * @param {string} props.width The width for the input. Defaults to 'full'.
 * @param {string} props.placeholder The placeholder for the input. (optional)
 * @param {React.ReactNode} props.iconLeft The icon for the left side of the input. (optional)
 * @param {React.ReactNode} props.iconRight The icon for the right side of the input. (optional)
 * @returns {JSX.Element} The rendered component.
 */
export const FormikInput: React.FC<FormikInputProps> = ({
  label,
  width = 'full',
  iconLeft,
  iconRight,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="field-wrapper">
      {label && (
        <label className="label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className={`field-wrapper__input ${width}`}>
        {iconLeft ? <span className="icon-left">{iconLeft}</span> : null}
        {iconRight ? <span className="icon-right">{iconRight}</span> : null}
        <input
          className={`field-input ${width}
                    ${iconLeft ? 'pl-7' : ''} 
                    ${iconRight ? 'pr-7' : ''} 
                    ${meta.touched && meta.error ? 'error' : ''}`}
          {...field}
          {...props}
        />
      </div>

      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </div>
  );
};
