import { useState } from 'react';

interface IUseChange<T> {
  state: T;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Generates a hook that manages the state of a form.
 *
 * @param {T} initialValues - The initial values for the form state.
 * @return {IUseChange<T>} An object containing the form state and a handleChange function.
 */
export const useChange = <T>(initialValues: T): IUseChange<T> => {
  const [state, setState] = useState<T>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'number'
          ? Number(value)
          : value,
    }));
  };

  return {
    state,
    handleChange,
  };
};
