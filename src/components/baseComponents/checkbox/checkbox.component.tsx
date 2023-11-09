import { AiOutlineCheck } from 'react-icons/ai';
import { IPropertyType } from '../../../common/interfaces';

interface checkBoxProps {
  label: string;
  name: string;
  values: IPropertyType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox: React.FC<checkBoxProps> = ({
  label,
  name,
  values,
  onChange,
  ...props
}) => {
  return (
    <div className="checkbox-wrapper">
      <label className=" checkbox__label">
        <span className="checkbox__checked">
          {values[name as keyof IPropertyType] && (
            <AiOutlineCheck size={20} color="white" />
          )}
        </span>
        <input
          type="checkbox"
          name={name}
          {...props}
          className="checkbox"
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};
