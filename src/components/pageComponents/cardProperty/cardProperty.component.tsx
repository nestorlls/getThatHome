import { IProperty } from '@common/interfaces';
import {
  CardDataProperty,
  CardFooter,
  CardPicture,
} from '@components/compositeComponents';
import { Link } from 'react-router-dom';

interface ICardPropertyProps {
  data: IProperty[];
}

/**
 * Render a card property component.
 *
 * @param {IProperty} data - The array of data for rendering the component.
 * @returns {JSX.Element} - The rendered card property component.
 */
export const CardProperty: React.FC<ICardPropertyProps> = ({
  data,
}): JSX.Element => {
  return (
    <>
      {data.map(({ _id, ...dataProperty }: IProperty, index: number) => (
        <div key={index} className="card-wrapper" id={_id}>
          <Link to={`/property/${_id}`}>
            <CardPicture
              images={dataProperty.images}
              propertyName={dataProperty.type}
              type={dataProperty.type}
            />
            <CardDataProperty dataProperty={dataProperty} />
          </Link>
          <CardFooter />
        </div>
      ))}
    </>
  );
};
