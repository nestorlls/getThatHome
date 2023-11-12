import { VIEWMODEL } from '@common/constant';
import { splitAddress } from '@utils/functions';

interface IAddressPropertyProps {
  address: string;
  viewModelType: 'card' | 'page';
}

/**
 * Renders an address property component based on the provided address and view model type.
 *
 * @param {string} address - The full address.
 * @param {string} viewModelType - ('card' | 'page') The type of view model to be used.
 * @return {ReactElement} The rendered address property component.
 */
export const AddressProperty: React.FC<IAddressPropertyProps> = ({
  address,
  viewModelType,
}) => {
  const { street, city, state } = splitAddress(address);

  if (viewModelType === VIEWMODEL.STYLE.CARD) {
    return (
      <div className="address-wrapper">
        <p className="address-card__text mb-4">{address}</p>
      </div>
    );
  }

  return (
    <div className="address-wrapper">
      <p className="address-page__street">{street}</p>
      <p className="address-page__city">
        {city}
        {state ? `, ${state} ` : null}
      </p>
    </div>
  );
};
