import React from 'react';
import { SignUpLayout } from '@layout/index';
import { useParams } from 'react-router-dom';
import { FormLoginSignUp } from '@components/pageComponents';

export const SignupForm: React.FC = (): React.JSX.Element => {
  const { role } = useParams();

  console.log(role);

  return (
    <SignUpLayout>
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
        <FormLoginSignUp type="signUp" title="Sign up" />
      </div>
    </SignUpLayout>
  );
};
