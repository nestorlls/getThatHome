import { useState } from 'react';
import { Button, CheckBox } from '../../baseComponents';
import { IPropertyType } from '../../../common/interfaces';

interface PropertyTypeFilterProps {
  getValues: (value: IPropertyType) => void;
}

export const PropertyTypeFilter: React.FC<PropertyTypeFilterProps> = ({
  getValues,
}): JSX.Element => {
  const initialValues: IPropertyType = {
    house: false,
    apartment: false,
  };

  const [propertyTypes, setPropertyTypes] = useState(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ischecked = e.target.checked;
    setPropertyTypes({
      ...propertyTypes,
      [e.target.name]: ischecked,
    });
  };

  return (
    <div className="property-type__wrapper">
      <label className="label">property type</label>
      <div className="property-type__content">
        <div className="property-type__checkbox">
          <CheckBox
            name="house"
            label="Houses"
            values={propertyTypes}
            onChange={handleChange}
          />
          <CheckBox
            name="apartment"
            label="Apartments"
            values={propertyTypes}
            onChange={handleChange}
          />
        </div>
        <div className="property-type__btn">
          <Button
            typeBtn="primary"
            size="small"
            onClick={() => getValues(propertyTypes)}>
            done
          </Button>
        </div>
      </div>
    </div>
  );
};
