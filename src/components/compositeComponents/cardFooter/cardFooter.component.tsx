import { FC, JSX } from 'react';

import { CardButton } from '@components/baseComponents';

/**
 * Renders the footer of a card property component.
 *
 * @returns JSX.Element - The rendered card footer.
 */
export const CardFooter: FC = (): JSX.Element => {
  return (
    <div className="card-footer__wrapper">
      <CardButton type="edit" />
      <CardButton type="close" />
    </div>
  );
};
