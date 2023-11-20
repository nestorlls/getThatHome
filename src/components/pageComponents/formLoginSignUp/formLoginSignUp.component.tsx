import { FC, JSX } from 'react';
import { RiUserReceived2Line } from 'react-icons/ri';
import { Form, Formik } from 'formik';

import { Button, FormikInput } from '@components/baseComponents';
import { BUTTON, SIZEICONS } from '@common/constant';
import {
  validationLoginSchema,
  validationSignUpSchema,
} from '@utils/validatios/formValidation';
import {
  IFormLoginSignUpProps,
  ILoginValues,
  ISignUpValues,
} from 'types/interfaces';

export const FormLoginSignUp: FC<IFormLoginSignUpProps> = ({
  type,
  title,
}): JSX.Element => {
  // initial values
  const signUpValues: ISignUpValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  };

  const loginValues: ILoginValues = {
    email: '',
    password: '',
  };

  // handler submit
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  // render login form
  if (type === 'login') {
    return (
      <div className="form-wrapper">
        <h1 className="form-title">{title}</h1>
        <Formik
          initialValues={loginValues}
          onSubmit={handleSubmit}
          validationSchema={validationLoginSchema}
        >
          {({ values, isValid }) => (
            <Form className="form">
              <div className="form-inputs__wrapper">
                <FormikInput
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@mail.com"
                  value={values.email}
                />
                <FormikInput
                  label="password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*********"
                  value={values.password}
                />
              </div>
              <div className="form-btn__wrapper">
                <Button
                  type="submit"
                  typeBtn={BUTTON.TYPE.PRIMARY}
                  leftIcon={<RiUserReceived2Line size={SIZEICONS.TWENTY} />}
                  disabled={!isValid}
                >
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

  // render signup form
  return (
    <div className="form-wrapper">
      <h1 className="form-title">{title}</h1>
      <Formik
        initialValues={signUpValues}
        validationSchema={validationSignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isValid }) => (
          <Form className="form">
            <div className="form-inputs__wrapper">
              <FormikInput
                label="Name"
                id="name"
                name="name"
                type="text"
                placeholder="john doe"
                value={values.name}
              />
              <FormikInput
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="user@mail.com"
                value={values.email}
              />
              <FormikInput
                label="Phone"
                id="phone"
                name="phone"
                type="text"
                placeholder="555-555-555"
                value={values.phone}
              />
              <FormikInput
                label="password"
                id="password"
                name="password"
                type="password"
                placeholder="*********"
                value={values.password}
              />
              <FormikInput
                label="Password confirmation"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="*********"
                value={values.passwordConfirm}
              />
            </div>
            <div className="form-btn__wrapper">
              <Button
                type="submit"
                typeBtn={BUTTON.TYPE.PRIMARY}
                disabled={!isValid}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
