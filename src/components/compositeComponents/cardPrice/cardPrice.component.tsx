import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { PiBuildings } from 'react-icons/pi';

import { PropertyAtribuite } from '../../baseComponents';

interface ICardPriceProps {
  price: number;
  PropertyType: string;
}

/**
 * Renders the price and type of a card.
 *
 * @param props - The props for the CardPrice component.
 * @param props.price - The price of the property.
 * @param props.type - The type of the property.
 * @returns The JSX element representing the CardPrice component.
 */
export const CardPrice: React.FC<ICardPriceProps> = ({
  price,
  PropertyType,
}: ICardPriceProps): JSX.Element => {
  return (
    <div className="card-Price__wrapper">
      <PropertyAtribuite
        icon={<BiDollarCircle size={35} />}
        atribuite={price}
        size="a-lg"
      />
      <PropertyAtribuite
        icon={<PiBuildings size={25} />}
        atribuite={PropertyType}
        size="a-md"
      />
    </div>
  );
};
