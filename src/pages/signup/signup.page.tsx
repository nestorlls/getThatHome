import React from 'react';

import { ChooseRole } from '@components/pageComponents';
import { SignUpLayout } from '@layout/index';

export const Signup: React.FC = (): React.JSX.Element => {
  return (
    <SignUpLayout>
      <ChooseRole />
    </SignUpLayout>
  );
};
