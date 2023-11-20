import { FC } from 'react';

interface IrolCardProps {
  children: JSX.Element;
  rol: string;
  description: string;
}

/**
 *
 * @param {IrolCardProps} props
 * @param {JSX.Element} props.children Illustrator component
 * @param {string} props.rol Role name
 * @param {string} props.description Role description
 * @returns {JSX.Element} RolCard component
 */

export const RolCard: FC<IrolCardProps> = ({ children, rol, description }) => {
  return (
    <div className="rol-card__wrapper">
      <div className="rol-card__illustrator-wrapper">{children}</div>
      <div className="rol-card__text-wrapper">
        <p className="rol-card__rol">{rol}</p>
        <p className="rol-card__description">{description}</p>
      </div>
    </div>
  );
};
