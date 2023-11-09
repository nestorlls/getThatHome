interface NumberButtonProps {
  value: number;
  isRoundedRight?: boolean;
  isRoundedLeft?: boolean;
  isCurrentValue?: boolean;
  getValue: (value: number) => void;
}

/**
+ * Renders a number button component.
+ *
+ * @param {NumberButtonProps} props - The props for the component.
+ * @param {number} props.value - The value of the button.
+ * @param {() => void} props.getValue - The function to call when the button is clicked.
+ * @param {boolean} props.roundedLeft - Whether the button has rounded left corners.
+ * @param {boolean} props.roundedRight - Whether the button has rounded right corners.
+ * @param {number} [props.currentValue=false] - The current value of the button.
+ * @return {React.ReactElement} The rendered number button.
+ */
export const NumberButton: React.FC<NumberButtonProps> = ({
  value,
  getValue,
  isRoundedLeft,
  isRoundedRight,
  isCurrentValue = false,
}: NumberButtonProps): React.ReactElement => {
  return (
    <button
      className={`btn-number 
                ${isCurrentValue ? 'active' : 'border-l'}
                ${isRoundedLeft ? 'left-line' : ''} 
                ${isRoundedRight ? 'right-line' : ''}`}
      onClick={() => getValue(value)}>
      {value === 0 ? 'Any' : value + '+'}
    </button>
  );
};
