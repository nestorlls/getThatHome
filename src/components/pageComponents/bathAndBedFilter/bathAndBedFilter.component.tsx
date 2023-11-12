import { useState } from 'react';

import { BUTTON } from '@common/constant';
import { IServices } from '@common/interfaces';
import { Button } from '@components/baseComponents';
import { CompositeButton } from '@components/compositeComponents';

interface BathAndBedFilterProps {
  getValues: (value: IServices) => void;
}

/**
 * React functional component for the BathAndBedFilter.
 *
 * @param {BathAndBedFilterProps} props - The props for the component.
 * @param {number} props.value - The current value.
 * @param {Function} props.getBed - The function to get the bed value.
 * @param {Function} props.getBath - The function to get the bath value.
 * @return {JSX.Element} The rendered BathAndBedFilter component.
 */
export const BathAndBedFilter: React.FC<BathAndBedFilterProps> = ({
  getValues,
}: BathAndBedFilterProps): JSX.Element => {
  const valuesArray: number[] = new Array(6).fill(0);
  const initialValues: IServices = {
    bed: 0,
    bath: 0,
  };

  const [filter, setFilter] = useState(initialValues);

  const getBed = (value: number) => {
    setFilter({
      ...filter,
      bed: value,
    });
  };

  const getBath = (value: number) => {
    setFilter({
      ...filter,
      bath: value,
    });
  };

  const handleSubmit = () => {
    getValues(filter);
  };

  return (
    <div className="bath-and-bed">
      <div className="bath-and-bed__container">
        <div className="bath-and-bed__content">
          <label className="label">beds</label>
          <CompositeButton
            array={valuesArray}
            value={filter.bed}
            getValue={getBed}
          />
        </div>
        <div className="bath-and-bed__content">
          <label className="label">baths</label>
          <CompositeButton
            array={valuesArray}
            value={filter.bath}
            getValue={getBath}
          />
        </div>
      </div>
      <div className="bath-and-bed__btn">
        <Button
          typeBtn={BUTTON.TYPE.PRIMARY}
          size={BUTTON.SIZE.SMALL}
          onClick={handleSubmit}>
          done
        </Button>
      </div>
    </div>
  );
};
