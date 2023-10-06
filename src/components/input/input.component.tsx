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
}

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
        <label className="field-label" htmlFor={props.id}>
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
