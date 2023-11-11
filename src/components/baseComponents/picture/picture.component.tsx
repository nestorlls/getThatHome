// import { PROPERTY } from '@common/constant';

interface ICardPictureProps {
  image: string;
  alt: string;
  size?: 'p-card' | 'p-page' | 'p-full';
}

export const Picture: React.FC<ICardPictureProps> = ({
  image,
  alt,
  size = 'p-full',
}): JSX.Element => {
  return (
    <div className={`card-picture__wrapper ${size}`}>
      <img src={image} alt={alt} className="card-picture__image object-cover" />
    </div>
  );
};
