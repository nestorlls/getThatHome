import React from 'react';
import { RiUserReceived2Line } from 'react-icons/ri';

import { Button } from '@components/baseComponents';
import { BUTTON } from '@common/constant';

/**
 * Render a component call to action for login or join to contact the advertiser
 * Button call a modal for login
 * @returns {JSX.Element} The rendered component
 */
export const CardCallLogin: React.FC = (): JSX.Element => {
  return (
    <div className="card-call-login__wrapper">
      <div className="card-call-login__content">
        <div className="card-call-login__text">
          <p>Login in or Join to</p>
          <p>contact the</p>
          <p>advertiser</p>
        </div>
        <div className="card-call-login__btn">
          <Button
            typeBtn={BUTTON.TYPE.PRIMARY}
            size={BUTTON.SIZE.SMALL}
            leftIcon={<RiUserReceived2Line />}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
