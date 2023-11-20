export const ROL = {
  LANDLORD: {
    NAME: 'Landlord',
    DESCRIPTION: 'You want to rent or sell a home',
    COLORS: {
      PRIMARY: 'rgba(191, 95, 130, 1)',
      SECONDARY: 'rgba(191, 95, 130, 1)',
      TERTIARY: '#F48FB1',
      QUATERNARY: '#F48FB1',
    },
  },
  HOMESEEKER: {
    NAME: 'Home Seeker',
    DESCRIPTION: 'You want to find a home',
    COLORS: {
      PRIMARY: 'rgba(191, 95, 130, 1)',
      SECONDARY: 'gray',
      TERTIARY: 'black',
      QUATERNARY: 'black',
    },
  },
} as const;
