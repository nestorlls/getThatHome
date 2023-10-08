interface checkBoxProps {
  label: string;
  id: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  iconChecked?: React.ReactNode;
}

export const CheckBox: React.FC<checkBoxProps> = ({ label, ...props }) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" className="checkbox peer" {...props} />
      <label htmlFor={props.id} className="checkbox__label">
        {label}
      </label>
      {props.iconChecked}
    </div>
  );
};
