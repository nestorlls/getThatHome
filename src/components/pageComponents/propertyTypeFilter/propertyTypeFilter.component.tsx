import { Button, CheckBox } from '@components/baseComponents';
import { IPropertyType } from '@common/interfaces';
import { useChange } from '@common/hooks';
import { BUTTON } from '@common/constant';

interface PropertyTypeFilterProps {
  getValues: (value: IPropertyType) => void;
}

export const PropertyTypeFilter: React.FC<PropertyTypeFilterProps> = ({
  getValues,
}: PropertyTypeFilterProps): JSX.Element => {
  const initialValues: IPropertyType = {
    house: false,
    apartment: false,
  };

  const { state, handleChange } = useChange(initialValues);

  return (
    <div className="property-type__wrapper">
      <label className="label">property type</label>
      <div className="property-type__content">
        <div className="property-type__checkbox">
          <CheckBox
            name="house"
            label="Houses"
            values={state}
            onChange={handleChange}
          />
          <CheckBox
            name="apartment"
            label="Apartments"
            values={state}
            onChange={handleChange}
          />
        </div>
        <div className="property-type__btn">
          <Button
            typeBtn={BUTTON.TYPE.PRIMARY}
            size={BUTTON.SIZE.SMALL}
            onClick={() => getValues(state)}>
            done
          </Button>
        </div>
      </div>
    </div>
  );
};
