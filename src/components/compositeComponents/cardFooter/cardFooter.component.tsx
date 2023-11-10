import { CardButton } from '../../baseComponents';

export const CardFooter = () => {
  return (
    <div className="card-footer__wrapper">
      <CardButton type="edit" />
      <CardButton type="close" />
    </div>
  );
};
