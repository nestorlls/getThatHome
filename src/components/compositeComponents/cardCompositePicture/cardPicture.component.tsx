import { PROPERTY } from '@common/constant';
import { CardShip, Picture } from '@components/baseComponents';
import React from 'react';

interface ICardPictureProps {
  images: string[];
  propertyName: string;
  type: string;
}

export const CardPicture: React.FC<ICardPictureProps> = ({
  images,
  propertyName,
  type,
}): JSX.Element => {
  const len = images.length;

  return (
    <div className="card-picture__wrapper">
      {len > 0 ? (
        <>
          {images.map((image, index) => (
            <div key={index} className="card-picture__composite">
              <div className="card-picture__cardShip">
                <CardShip type={type} />
              </div>
              <Picture image={image} alt={propertyName} size="p-card" />
            </div>
          ))}
        </>
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
