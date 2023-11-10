import { useChange } from '../../../common/hooks';
import { IMore } from '../../../common/interfaces';
import { Button, CheckBox, Input } from '../../baseComponents';

interface MoreFilterProps {
  getValues: (values: IMore) => void;
}

export const MoreFilter: React.FC<MoreFilterProps> = ({
  getValues,
}: MoreFilterProps): JSX.Element => {
  const initialValues: IMore = {
    pet: false,
    min: 0,
    max: 0,
    parking: false,
    garage: false,
  };

  const { state, handleChange } = useChange(initialValues);

  return (
    <div className="more-filter__container">
      <div>
        <CheckBox
          label="Pets Allowed"
          name="pet"
          values={state}
          onChange={handleChange}
        />
      </div>
      <div className="more-filter__wrapper">
        <label className="label">area in m2</label>
        <div className="more-filter__content">
          <div className="more-filter__input-wrapper">
            <Input
              name="min"
              type="number"
              size="sm"
              placeholder="min"
              value={state.min}
              onChange={handleChange}
            />
            <span className="more-filter__separator"></span>
            <Input
              name="max"
              type="number"
              size="sm"
              placeholder="max"
              value={state.max}
              onChange={handleChange}
            />
          </div>
          <div className="more-filter__btn">
            <Button
              typeBtn="primary"
              size="small"
              onClick={() => getValues(state)}>
              done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
