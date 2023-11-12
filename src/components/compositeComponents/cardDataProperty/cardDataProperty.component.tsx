import { CardPrice, CardPropAtribuites } from '@components/compositeComponents';
import { IProperty } from '@common/interfaces';
import { AddressProperty } from '@components/baseComponents';
import { PROPERTY, VIEWMODEL } from '@common/constant';

interface ICardDataPropertyProps {
  dataProperty: IProperty;
}

/**
 * Renders the card data property.
 * @param {IProperty} dataProperty - The data property object.
 * @returns {JSX.Element} - The JSX element.
 */
export const CardDataProperty: React.FC<ICardDataPropertyProps> = ({
  dataProperty,
}): JSX.Element => {
  const {
    type,
    address,
    rent,
    price,
    propertyType,
    bedRooms,
    bathRooms,
    area,
    petAllowed,
  }: IProperty = dataProperty;

  return (
    <div className="card-data-property__wrapper">
      <CardPrice
        price={type === PROPERTY.TYPE.RENT ? rent : price}
        PropertyType={propertyType}
      />
      <div className="card-data-property__content">
        <AddressProperty
          address={address}
          viewModelType={VIEWMODEL.STYLE.CARD}
        />
        <CardPropAtribuites
          bed={bedRooms}
          bath={bathRooms}
          area={area}
          pet={petAllowed}
        />
      </div>
    </div>
  );
};
