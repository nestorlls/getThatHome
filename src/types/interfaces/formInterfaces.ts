export interface ILoginValues {
  email: string;
  password: string;
}

export interface ISignUpValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

export interface IFormLoginSignUpProps {
  type: 'login' | 'signUp';
  title: string;
}
