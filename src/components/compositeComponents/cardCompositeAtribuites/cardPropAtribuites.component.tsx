import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { MdPets } from 'react-icons/md';

import { PropertyAtribuite } from '@components/baseComponents';
import { SIZEICONS } from '@common/constant';

interface ICardPropAtribuitesProps {
  bed: number;
  bath: number;
  area: number;
  pet: boolean;
}

/**
 * Renders the card properties attributes.
 *
 * @param props - The properties for the card attributes.
 * @returns The JSX element representing the card properties attributes.
 */
export const CardPropAtribuites: React.FC<ICardPropAtribuitesProps> = (
  props: ICardPropAtribuitesProps
): JSX.Element => {
  const { bed, bath, area, pet } = props;
  return (
    <div className="card-composite__wrapper">
      <PropertyAtribuite
        icon={<BiBed size={SIZEICONS.TWENTY} />}
        atribuite={bed}
      />
      <PropertyAtribuite
        icon={<BiBath size={SIZEICONS.TWENTY} />}
        atribuite={bath}
      />
      <PropertyAtribuite
        icon={<BiArea size={SIZEICONS.TWENTY} />}
        atribuite={area}
        units="m2"
      />
      {pet && (
        <PropertyAtribuite
          icon={<MdPets size={SIZEICONS.TWENTY} />}
          atribuite={pet}
        />
      )}
    </div>
  );
};
