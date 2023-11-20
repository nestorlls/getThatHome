import * as Yup from 'yup';

const validationLoginSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const validationSignUpSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match'
  ),
});

export { validationLoginSchema, validationSignUpSchema };
