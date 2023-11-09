interface NumberButtonProps {
  value: number;
  roundedRight?: boolean;
  roundedLeft?: boolean;
  currentValue?: boolean;
  getValue: (value: number) => void;
}

export const NumberButton: React.FC<NumberButtonProps> = ({
  value,
  getValue,
  roundedLeft,
  roundedRight,
  currentValue = 0,
}) => {
  return (
    <button
      className={`btn-number 
                ${currentValue ? 'active' : 'border-l'}
                ${roundedLeft && 'left-line'} 
                ${roundedRight && 'right-line'}`}
      onClick={() => getValue(value)}>
      {value === 0 ? 'Any' : value + '+'}
    </button>
  );
};
