import { BiSolidDollarCircle, BiDollarCircle } from 'react-icons/bi';
import { PROPERTY } from '../../../common/constant';

interface CardShipProps {
  type: string;
}

/**
+ * Renders a card component for displaying rental and sale information.
+ *
+ * @param {CardShipProps} type - The rental information.
+ * @return {JSX.Element} The rendered card component.
+ */
export const CardShip = ({ type }: CardShipProps): JSX.Element => {
  if (type === PROPERTY.TYPE.RENT) {
    return (
      <div className="card-ship__wrapper rent-wrapper">
        <div className="rent-icons__wrapper">
          <span className="rent-icon rent-icon__first">
            <BiDollarCircle size={15} color="white" />
          </span>
          <span className="rent-icon rent-icon__second">
            <BiDollarCircle size={15} color="white" />
          </span>
        </div>
        <span className="type-text">For {type}</span>
      </div>
    );
  }

  return (
    <div className="card-ship__wrapper sale-wrapper">
      <span className="sale-icon__wrapper">
        <BiSolidDollarCircle size={20} color="white" />
      </span>
      <span className="type-text">For {type}</span>
    </div>
  );
};
