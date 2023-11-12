import { BiSolidDollarCircle } from 'react-icons/bi';

import { Button, Input } from '@components/baseComponents';
import { IPrice } from '@common/interfaces/';
import { useChange } from '@common/hooks';
import { BUTTON } from '@common/constant';

interface PriceFilterProps {
  getValues: (values: IPrice) => void;
}

/**
+ * Renders a price filter component.
+ *
+ * @param {PriceFilterProps} getValues - A function that retrieves the current state values.
+ * @return {JSX.Element} The rendered price filter component.
+ */
export const PriceFilter: React.FC<PriceFilterProps> = ({
  getValues,
}: PriceFilterProps): JSX.Element => {
  const initialValues: IPrice = {
    min: 0,
    max: 0,
  };

  const { state, handleChange } = useChange(initialValues);

  return (
    <div className="price-filter__wrapper">
      <label className="label">price range</label>
      <div className="price-filter__content">
        <div className="price-filter-inputs__wrapper">
          <Input
            name="min"
            type="number"
            id="min"
            size="sm"
            value={state.min}
            onChange={handleChange}
            placeholder="min"
            iconLeft={<BiSolidDollarCircle size={20} color="gray" />}
          />
          <span className="separator"></span>
          <Input
            name="max"
            type="number"
            id="max"
            size="sm"
            value={state.max}
            onChange={handleChange}
            placeholder="max"
            iconLeft={<BiSolidDollarCircle size={20} color="gray" />}
          />
        </div>
        <div className="price-filter__btn">
          <Button
            type="button"
            size={BUTTON.SIZE.SMALL}
            onClick={() => getValues(state)}>
            done
          </Button>
        </div>
      </div>
    </div>
  );
};
