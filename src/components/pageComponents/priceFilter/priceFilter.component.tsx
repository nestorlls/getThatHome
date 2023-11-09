import { useState } from 'react';
import { Button, Input } from '../../baseComponents';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { IPrice } from '../../../common/interfaces/filter.interface';

export const PriceFilter = () => {
  const initialValues: IPrice = {
    min: 0,
    max: 0,
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: !isNaN(Number(value)) ? Number(value) : 0,
    });
  };

  return (
    <div className="price-filter__wrapper">
      <label className="label">price range</label>
      <div className="price-filter__content">
        <div className="price-filter-inputs__wrapper">
          <Input
            name="min"
            type="text"
            id="min"
            size="sm"
            value={values.min}
            onChange={handleChange}
            placeholder="min"
            iconLeft={<BiSolidDollarCircle size={20} color="gray" />}
          />
          <span className="separator"></span>
          <Input
            name="max"
            type="text"
            id="max"
            size="sm"
            value={values.max}
            onChange={handleChange}
            placeholder="max"
            iconLeft={<BiSolidDollarCircle size={20} color="gray" />}
          />
        </div>
        <div className="price-filter__btn">
          <Button
            type="button"
            size="small"
            onClick={() => console.log(values)}>
            done
          </Button>
        </div>
      </div>
    </div>
  );
};
