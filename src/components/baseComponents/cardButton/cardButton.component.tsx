import { FiEdit } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface CardButtonProps {
  type: string;
}

export const CardButton: React.FC<CardButtonProps> = ({
  type,
}: CardButtonProps): React.ReactElement => {
  if (type === 'edit') {
    return (
      <button className="card-btn">
        <span>
          <FiEdit size={20} color="white" />
        </span>
        <span className="text-button uppercase">{type}</span>
      </button>
    );
  }

  return (
    <button className="card-btn">
      <span>
        <AiOutlineCloseCircle size={20} color="white" />
      </span>
      <span className="text-button uppercase">{type}</span>
    </button>
  );
};
