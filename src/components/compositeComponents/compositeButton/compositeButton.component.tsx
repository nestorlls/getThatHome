import { NumberButton } from '../../baseComponents';

interface CompositeButtonProps {
  array: number[];
  value: number;
  getValue: (value: number) => void;
}

/**
+ * Generates a composite button component.
+ *
+ * @param {CompositeButtonProps} array - An array of values.
+ * @param {function} getValue - A function to get the value.
+ * @param {number} value - The current value.
+ * @return {ReactNode} The composite button component.
+ */
export const CompositeButton: React.FC<CompositeButtonProps> = ({
  array,
  getValue,
  value,
}: CompositeButtonProps): React.ReactNode => {
  const firtIndex = 0;
  const lastIndex = array.length - 1;

  return (
    <div className="btn-composite">
      {array?.map((_, index) => (
        <NumberButton
          key={index}
          value={index}
          isRoundedLeft={index === firtIndex}
          isRoundedRight={index === lastIndex}
          isCurrentValue={index === value}
          getValue={getValue}
        />
      ))}
    </div>
  );
};
