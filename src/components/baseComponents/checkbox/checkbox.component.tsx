import { AiOutlineCheck } from 'react-icons/ai';

interface checkBoxProps<T> {
  label: string;
  name: string;
  values: T;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = <T,>({
  label,
  name,
  values,
  onChange,
  ...props
}: checkBoxProps<T>): JSX.Element => {
  return (
    <div className="checkbox-wrapper">
      <label className=" checkbox__label">
        <span className="checkbox__checked">
          {values[name as keyof T] && (
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
