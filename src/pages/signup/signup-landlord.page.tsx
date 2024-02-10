import React from 'react';
import { SignUpLayout } from '@layout/index';
import { useParams } from 'react-router-dom';

export const SignupLandLord: React.FC = (): React.JSX.Element => {
  const { role } = useParams();

  console.log(role);

  return <SignUpLayout>hola</SignUpLayout>;
};
