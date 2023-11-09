import { useField } from 'formik';
import { AiOutlineCheck } from 'react-icons/ai';

interface FormikCheckBoxProps {
  label: string;
  id: string;
  name: string;
  children: React.ReactNode;
}

export const FormikCheckBox: React.FC<FormikCheckBoxProps> = ({
  children,
  ...props
}) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="forimik-checkbox-wrapper">
      <label className="formik-checkbox__label">
        {field.checked && (
          <span className="formik-checkbox__checked">
            {field.checked && <AiOutlineCheck size={20} color="white" />}
          </span>
        )}
        <input
          className="formik-checkbox"
          type="checkbox"
          {...field}
          {...props}
        />
        {children}
      </label>
    </div>
  );
};
