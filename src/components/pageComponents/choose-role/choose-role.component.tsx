import React from 'react';

import { ChooseRolCard } from '@components/compositeComponents';

export const ChooseRole: React.FC = (): React.JSX.Element => {
  return (
    <div className="signup-card__wrapper">
      <div className="signup-text__wrapper">
        <h1 className="signup-title">Choose the role you want</h1>
        <h2 className="signup-subtitle">What are you looking for?</h2>
      </div>
      <ChooseRolCard />
    </div>
  );
};
