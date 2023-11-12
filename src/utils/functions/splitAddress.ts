interface IAddress {
  street: string;
  city: string;
  state: string;
}

export const splitAddress = (address: string): IAddress => {
  if (!address || address.trim() === '') {
    return {
      street: '',
      city: '',
      state: '',
    };
  }

  const [street, city, state] = address ? address.split(', ') : [];

  return {
    street,
    city,
    state,
  };
};
