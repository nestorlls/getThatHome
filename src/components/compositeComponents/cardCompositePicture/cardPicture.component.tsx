import { PROPERTY } from '@common/constant';
import { CardShip, Picture } from '@components/baseComponents';
import React from 'react';

interface ICardPictureProps {
  images: string[];
  propertyName: string;
  type: string;
}

/**
 * Renders a card picture component.
 *
 * @param {ICardPictureProps} props - The properties for the card picture component.
 * @param {Array} props.images - The array of images.
 * @param {string} props.propertyName - The name of the property.
 * @param {string} props.type - The type of the card picture.
 * @returns {JSX.Element} The JSX element representing the card picture component.
 */
export const CardPicture: React.FC<ICardPictureProps> = ({
  images,
  propertyName,
  type,
}): JSX.Element => {
  const len = images.length;

  return (
    <div className="card-picture__wrapper">
      {len > 0 ? (
        <div className="card-picture__composite">
          <div className="card-picture__cardShip">
            <CardShip type={type} />
          </div>
          <Picture image={images[0]} alt={propertyName} size="p-card" />
        </div>
      ) : (
        <div className="card-picture__composite">
          <div className="card-picture__cardShip">
            <CardShip type={type} />
          </div>
          <Picture
            image={PROPERTY.URL.PICTURE}
            alt={propertyName}
            size="p-card"
          />
        </div>
      )}
    </div>
  );
};
