import { useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState<boolean>(false);

  const toggleHandler = () => {
    setState(!state);
  };

  return { state, toggleHandler };
};
