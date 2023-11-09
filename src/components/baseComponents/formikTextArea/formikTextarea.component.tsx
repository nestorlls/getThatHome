import { useField } from 'formik';

interface FormikTextAreaProps {
  label: string;
  id: string;
  name: string;
  width?: 'w-sm' | 'w-md' | 'w-lg' | 'w-xl' | 'full';
  hight?: 'h-sm' | 'h-md' | 'h-lg' | 'h-xl';
  iconLeft?: React.ReactNode;
}

export const FormikTextArea: React.FC<FormikTextAreaProps> = ({
  label,
  width = 'full',
  hight = 'h-md',
  iconLeft,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="textarea-wrapper">
      {label && (
        <label className="textarea-label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className="textarea-wrapper__input">
        {iconLeft ? (
          <span className="icon-left__textarea">{iconLeft}</span>
        ) : null}
        <textarea
          className={`textarea-input ${width} ${hight} ${
            iconLeft ? 'pl-7' : ''
          } ${meta.touched && meta.error ? 'error__textarea' : ''}`}
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error-message__textarea">{meta.error}</div>
      ) : null}
    </div>
  );
};
