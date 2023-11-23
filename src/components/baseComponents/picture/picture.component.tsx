// import { PROPERTY } from '@common/constant';

interface ICardPictureProps {
  image: string;
  alt: string;
  size?: 'p-card' | 'p-page' | 'p-full';
}

/**
 * Renders a picture component with the given image and alt text.
 *
 * @param {ICardPictureProps} props - The props object containing the image, alt, and size of the picture.
 * @param {string} props.image - The URL of the image.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.size='p-full'] - The size of the picture component.
 * @returns {JSX.Element} The rendered picture component.
 */
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
